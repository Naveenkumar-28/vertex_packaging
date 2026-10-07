const Submission = require("../models/Submission");

const {
    sendSubmissionEmail,
} = require("../services/emailService");

const asyncHandler = require("../middleware/asyncHandler");

const {
    AppError,
} = require("../middleware/errorHandler");


const allowedTypes = [
    "quote",
    "contact",
    "enquiry"
];


// POST /api/submissions
const createSubmission = asyncHandler(
    async (req, res) => {

        const {
            type,
            name,
            company,
            email,
            phone,
            product_type,
            product_id,
            quantity,
            requirement,
            message,
        } = req.body;


        // Validate submission type
        if (
            !type ||
            !allowedTypes.includes(type)
        ) {
            throw new AppError(
                "Invalid submission type",
                400
            );
        }


        // Create submission
        const submission =
            await Submission.create({
                type,
                name,
                company,
                email,
                phone,
                product_type,
                product_id,
                quantity,
                requirement,
                message,
            });


        // Send email without blocking API
        sendSubmissionEmail(
            submission.toObject()
        )
            .then(() => {
                console.log(
                    "Submission email sent"
                );
            })
            .catch((error) => {
                console.error(
                    "Resend error:",
                    error.message
                );
            });


        res.status(201).json({
            success: true,
            data: submission,
        });
    }
);


// GET /api/submissions
const getSubmissions = asyncHandler(
    async (req, res) => {

        const { type } = req.query;

        let limit =
            parseInt(req.query.limit, 10) || 200;

        limit = Math.min(limit, 1000);


        const query = {};


        if (type) {

            if (
                !allowedTypes.includes(type)
            ) {
                throw new AppError(
                    "Invalid submission type",
                    400
                );
            }

            query.type = type;
        }


        const submissions =
            await Submission.find(query)
                .sort({ createdAt: -1 })
                .limit(limit)
                .lean();


        res.status(200).json({
            success: true,
            count: submissions.length,
            data: submissions,
        });
    }
);


// GET /api/submissions/stats
const getSubmissionStats =
    asyncHandler(async (req, res) => {

        const stats = {};

        for (const type of allowedTypes) {

            stats[type] =
                await Submission.countDocuments({
                    type,
                });
        }


        stats.total =
            allowedTypes.reduce(
                (total, type) =>
                    total + stats[type],
                0
            );


        res.status(200).json({
            success: true,
            data: stats,
        });
    });


module.exports = {
    createSubmission,
    getSubmissions,
    getSubmissionStats,
};