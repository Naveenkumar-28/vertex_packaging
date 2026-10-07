const mongoose = require('mongoose')
const { v4: uuidv4 } = require("uuid");

const submissionSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: uuidv4,
            unique: true,
        },

        type: {
            type: String,
            enum: ["quote", "contact", "enquiry", "newsletter"],
            required: true,
        },

        name: {
            type: String,
            default: null,
        },

        company: {
            type: String,
            default: null,
        },

        email: {
            type: String,
            default: null,
        },

        phone: {
            type: String,
            default: null,
        },

        product_type: {
            type: String,
            default: null,
        },

        product_id: {
            type: String,
            default: null,
        },

        quantity: {
            type: String,
            default: null,
        },

        requirement: {
            type: String,
            default: null,
        },

        message: {
            type: String,
            default: null,
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "submissions",
    }
);

const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;