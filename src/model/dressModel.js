const mongoose = require("mongoose");
const validator = require("validator");

const dressSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
  },
});

const Dress = mongoose.model("Dress", dressSchema);
module.exports = Dress;
