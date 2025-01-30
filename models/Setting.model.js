const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const settingSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        },
    bio: {
        type: String,
        },
    location: {
        type: String,
        },
    website: {
        type: String,
        },
    paymentOption: {
        type: String,
        },
    accountHolderName: {
        type: String,
        },
    ibanNumber: {
        type: String,
        },
    bic: {
        type: String,
        },
    bankName: {
        type: String,
        },
    fullName: {
        type: String,
        },
    phoneNumber: {
        type: String,
        },
    country: {
        type: String,
        },
    city: {
        type: String,
        },
    address1: {
        type: String,
        },
    address2: {
        type: String,
        },
    postalCode: {
        type: String,
        },
    returnPolicy: {
        type: Boolean,
    },
    makeProfileVisible: {
        type: Boolean,
    },
    showEmailAddress: {
        type: Boolean,
    },
    allowMessages: {
        type: Boolean,
    },
    allowDataCollection: {
        type: Boolean,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  // owner will be added later on
});

module.exports = model("Setting", settingSchema);
