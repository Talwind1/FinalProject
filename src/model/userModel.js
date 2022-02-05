const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
    // //  validate - isEmail
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  myItems: { type: Array, default: [] },
  wishlist: { type: Array, default: [] },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
