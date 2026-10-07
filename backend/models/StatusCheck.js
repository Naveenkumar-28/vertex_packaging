const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const statusCheckSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4,
            unique: true,
        },

        client_name: {
            type: String,
            required: true,
        },

        timestamp: {
            type: Date,
            default: Date.now,
        },
    },
    {
        versionKey: false,
        collection: "status_checks",
    }
);

const StatusCheck = mongoose.model("StatusCheck", statusCheckSchema);

module.exports = StatusCheck