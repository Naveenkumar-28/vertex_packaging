const express = require("express");

const {
    login,
    me,
    logout,
} = require("../controllers/authController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

// Login
router.post("/login", login);

// Check token
router.get("/me", protectAdmin, me);

// Logout
router.post("/logout", protectAdmin, logout);

module.exports = router;