const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
        },
        date: String,
        done: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("User", userSchema);