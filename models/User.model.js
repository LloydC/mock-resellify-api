const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'firstName is required.']
    },
    lastName: {
      type: String,
      required: [true, 'lastName is required.']
    },
    username: {
      type: String,
      required: [true, 'username is required.']
    },
    dateOfBirth: {
      type: Date,
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    interestedIn: {
      type: String,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
    appleId: {
      type: String,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    currency: {
      type: String,
    },
    items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    shopifyProducts: [{ type: Schema.Types.ObjectId, ref: "ShopifyItem" }],
    settingId: { type: Schema.Types.ObjectId, ref: "Setting" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
