const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const itemSchema = new Schema({
    productName: {
        type: String,
      },
    productImage: {
        type: String,
      },
    productDescription: {
        type: String,
      },
    productCategory: {
        type: String,
      },
    brand: {
        type: String,
      },
    price: {
        type: Number,
      },
    compareAtPrice: {
        type: Number,
      },
    size: {
        type: String,
      },
    colours: {
        type: String,
      },
    season: {
        type: String,
      },
    occasion: {
        type: String,
      },
    fabric: {
        type: String,
      },
    status: {
        type: String,
      },
    careDetails: {
        type: String,
      },
    comments: {
        type: String,
      },
    availableForSell: {
        type: Boolean,
      },
    addedOn: {
        type: Date,
      },
    sold: {
        type: Date,
      },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Item", itemSchema);