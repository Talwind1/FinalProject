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
    required: true,
  },
  price: {
    type: Number,
    required: true,
    // validate(value) {
    //   if (!Number.isInteger(value)) {
    //     throw new Error("Price must be a positive number");
    //   }
    // },
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
});

const Dress = mongoose.model("Dress", dressSchema);
module.exports = Dress;
