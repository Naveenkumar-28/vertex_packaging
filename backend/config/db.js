
const mongoose = require("mongoose");
const dns = require("dns");

// Prefer IPv4 DNS results
dns.setDefaultResultOrder("ipv4first");

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL environment variable is missing!");
        }

        const conn = await mongoose.connect(process.env.MONGO_URL, {
            ...(process.env.DB_NAME && {
                dbName: process.env.DB_NAME,
            }),
            serverSelectionTimeoutMS: 10000,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        throw error;
    }
};

module.exports = connectDB;
