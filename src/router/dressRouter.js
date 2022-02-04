const express = require("express");
const req = require("express/lib/request");
const dressRouter = express.Router();
const {
  getAllDresses,
  getMyDresses,
  getDressesFiltered,
  deleteDress,
  updateDress,
  addDress,
} = require("../controllers/dress.conterollers");
const multer = require("multer");

dressRouter.get("/dresses", getAllDresses);

dressRouter.get("/dresses/me", getMyDresses);

dressRouter.post("/dresses", addDress);

dressRouter.patch("/dresses/:id", updateDress);
dressRouter.delete("/dresses/:id", deleteDress);
// dressRouter.delete("/dresses/:id", (req, res) => {
//   try {
//     res.status(200).send(deleteDress());
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// dressRouter.patch("/dresses/:id", (req, res) => {
//   try {
//     res.status(200).send(updateDress());
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// const upload = multer({
//   dest: "dresses",
//   limits: {
//     fileSize: 1000000,
//   },
//   filename: function (req, file, cb) {
//     //    const name = req.user._id + Math.random() * 1000000 + "jpg";
//     return "tal.jpg";
//   },
//   fileFilter(req, file, cb) {
//     if (
//       !file.originalname.endsWith(".jpg") &&
//       !file.originalname.endsWith(".png")
//     ) {
//       return cb(new Error("Please upload an image"));
//     }
//     cb(undefined, true); //accept the upload if its not filtered.
//   },
// });

// // const errorMiddleware = (req, res, next) => {
// //   throw new Error("From my middleware");
// // };
// dressRouter.post(
//   "/dresses/me/upload",
//   /*  auth,*/
//   upload.single("upload"),
//   (req, res) => {
//     res.status(200).send("trying");
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message });
//   }
// );
module.exports = dressRouter;
