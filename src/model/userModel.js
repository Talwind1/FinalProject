const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //  validate - isEmail
  },
  _id: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
