const mongoose = require("mongoose");
const dns = require('dns');

// Fix for Node.js v17+ DNS resolution issues on cloud servers
dns.setDefaultResultOrder('ipv4first');

const connectDB = async () => {
    try {
        // Debug check to verify if environment variables are loaded on deployment
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL environment variable is missing!");
        }

        const conn = await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME || undefined, // Fallback if DB_NAME isn't set separately
            serverSelectionTimeoutMS: 10000, // Timeout after 10 seconds instead of hanging
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
