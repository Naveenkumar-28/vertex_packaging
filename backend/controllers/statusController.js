
const { AppError } = require("../middleware/errorHandler");
const StatusCheck = require("../models/StatusCheck");

const createStatus = async (req, res) => {
    try {

        if (!req.body?.client_name) {
            throw new AppError(
                "client_name is required",
                400
            );
        }
        const { client_name } = req.body;

        const status = await StatusCheck.create({
            client_name,
        });

        res.status(201).json(status);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to create status",
        });
    }
};

const getStatus = async (req, res) => {
    try {
        const status = await StatusCheck.find({})
            .sort({ timestamp: -1 })
            .lean();

        res.json(status);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to get status",
        });
    }
};

module.exports = {
    createStatus,
    getStatus,
};