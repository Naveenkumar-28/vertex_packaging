const mongoose = require("mongoose");
const { randomUUID } = require("crypto");

const statusCheckSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: randomUUID,
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