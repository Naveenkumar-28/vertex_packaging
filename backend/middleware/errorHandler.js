
// middleware/errorMiddleware.js

// Custom application error
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4")
            ? "fail"
            : "error";

        Error.captureStackTrace(this, this.constructor);
    }
}


// Global error handler
const errorMiddleware = (
    err,
    req,
    res,
    next
) => {
    console.error("ERROR:", err);

    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";

    // MongoDB duplicate key error
    if (err.code === 11000) {
        statusCode = 409;
        message = "Duplicate data already exists";
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        statusCode = 400;

        const errors = Object.values(err.errors).map(
            (error) => error.message
        );

        return res.status(statusCode).json({
            success: false,
            message: "Validation failed",
            errors,
        });
    }

    // Mongoose CastError
    if (err.name === "CastError") {
        statusCode = 400;
        message = `Invalid ${err.path}: ${err.value}`;
    }

    res.status(statusCode).json({
        success: false,
        message,
    });
};


module.exports = {
    AppError,
    errorMiddleware,
};