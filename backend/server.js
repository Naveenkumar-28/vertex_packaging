const dotenv = require("dotenv");
const path = require("path");
const images = require('./data/images.json');
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const statusRoutes = require("./routes/statusRoutes");
const submissionRoutes = require("./routes/submissionRoutes");
const authRoutes = require("./routes/authRoutes");


const notFoundMiddleware = require("./middleware/notFoundMiddleware");

const {
    errorMiddleware,
} = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");



const app = express();

const PORT = process.env.PORT || 5000;


// Database
connectDB();

// Middleware
// Define allowed origins from environment variable or fallback to defaults
const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',').map(origin => origin.trim())
    : ["http://localhost:3000", "http://localhost:5173", "https://vertex-packaging-25yx.vercel.app"];

app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps, Postman, or server-to-server requests)
            if (!origin) return callback(null, true);

            if (allowedOrigins.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, // Required if you are sending cookies or authorization headers
    })
);

app.use(express.json());
app.use(cookieParser());


// Root
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "vertex Packaging API",
        status: "ok",
    });
});

// Browsers cache images for 30 days, so repeat visits are fast
app.use('/images', express.static(path.join(__dirname, 'public/images'), {
    maxAge: '30d',
    immutable: true,
}));

app.get('/api/images', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const start = (page - 1) * limit;
    res.json({ total: images.length, page, items: images.slice(start, start + limit) });
});

// Auth
app.use("/api/auth", authRoutes);

// Routes
app.use(
    "/api/status",
    statusRoutes
);

app.use(
    "/api/submissions",
    submissionRoutes
);


// 404 Handler
app.use(notFoundMiddleware);


// GLOBAL ERROR HANDLER
app.use(errorMiddleware);


// Start server
const server = app.listen(
    PORT,
    () => {
        console.log(
            `Server running on port ${PORT}`
        );
    }
);


// Graceful shutdown
const shutdown = () => {

    console.log(
        "Shutting down server..."
    );

    server.close(() => {
        console.log(
            "Server closed"
        );

        process.exit(0);
    });
};


process.on(
    "SIGINT",
    shutdown
);

process.on(
    "SIGTERM",
    shutdown
);
