const mongoose = require("mongoose");
const validator = require("validator");

const dressSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
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
  url: { type: String },

  owner: {
    type: String,
  },
  phone: {
    type: String,
  },
});

const Dress = mongoose.model("Dress", dressSchema);
module.exports = Dress;

// //up img
// const multer = require("multer");
// const { append } = require("express/lib/response");
// const upload = multer({ dest: "dresses" });
// app.post("/upload", upload.single(""), (req, res) => {
//   res.send();
// });
// //router
// router.post("dresses/me/img", (req, res) => {
//   res.send();
// });
