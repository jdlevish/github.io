const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "Enter a first name"
    },
    lastName: {
        type: String,
        trim: true,
        required: "Enter a last name"
    },
    email: {
        type: String,
        required: "Enter a valid Email address"
    },
    message: {
        type: String,

    },
    mailingList: {
        type: Boolean,

    }
});

const contact = mongoose.model("contact", contactSchema);

module.exports = contact;
