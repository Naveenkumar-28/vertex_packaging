const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

const createToken = (admin) => {
    return jwt.sign(
        {
            id: admin._id,
            email: admin.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );
};

// LOGIN
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const admin = await Admin.findOne({
            email: email.toLowerCase(),
        });

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            admin.password
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = createToken(admin);

        res.cookie("adminToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:
                process.env.NODE_ENV === "production"
                    ? "none"
                    : "lax",
            maxAge: 24 * 60 * 60 * 1000,
        });

        return res.json({
            success: true,
            message: "Login successful",
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        console.error("Login error:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// CHECK LOGIN
const me = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin.id).select(
            "-password"
        );

        if (!admin) {
            return res.status(401).json({
                success: false,
                message: "Admin not found",
            });
        }

        res.json({
            success: true,
            admin,
        });
    } catch (error) {
        console.error("Auth check error:", error);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// LOGOUT
const logout = (req, res) => {
    res.clearCookie("adminToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:
            process.env.NODE_ENV === "production"
                ? "none"
                : "lax",
    });

    res.json({
        success: true,
        message: "Logout successful",
    });
};

module.exports = {
    login,
    me,
    logout,
};