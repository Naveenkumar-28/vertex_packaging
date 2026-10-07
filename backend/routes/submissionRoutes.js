const express = require("express");

const {
    createSubmission,
    getSubmissions,
    getSubmissionStats,
} = require("../controllers/submissionController");

const protectAdmin = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", createSubmission);

router.get("/", protectAdmin, getSubmissions);

router.get(
    "/stats", protectAdmin,
    getSubmissionStats
);

module.exports = router;