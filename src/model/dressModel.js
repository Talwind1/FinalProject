const mongoose = require("mongoose");
const validator = require("validator");

// const dressSchema = new mongoose.Schema({
//   //image- upload.
//   size: {
//     type: String,
//     required: true,
//     trim: true,
//     validate(value) {
//       if (![xxs, xs, s, m, l, xl, xxl].includes(value)) {
//         throw new Error("Price should be:xxs,xs,s,m,l,xl or xxl");
//       }
//     },
//   },
//   price: {
//     type: Number,
//     required: true,
//     default: 0,
//     validate(value) {
//       if (!Number.isInteger(value)) {
//         throw new Error("Price must be a positive number");
//       }
//     },
//   },
//   location: {
//     //add autocomplete ciities.
//     type: String,
//     required: true,
//   },
// });

const dressSchema = mongoose.Schema({
  location: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
});

const Dress = mongoose.model("Dress", dressSchema);
module.exports = Dress;
