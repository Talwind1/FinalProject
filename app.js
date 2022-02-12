const express = require("express");
const mongoose = require("mongoose");
const { MONGOOSE_URI, CorsConfig } = require("./config.js");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dressRouter = require("./src/router/dressRouter");
const userRouter = require("./src/router/userRouter");
const path = require("path");

app.use(cors());
app.use(cors(CorsConfig));
app.use(express.urlencoded({ extended: false })); //alex
app.use(express.json());
app.use("/api", dressRouter);
app.use("/api", userRouter);
const publicPath = path.join(__dirname, "client/build");
app.use(express.static(publicPath));

mongoose.connect(MONGOOSE_URI, (error, mongo) => {
  if (error) return console.log(error);
  const { host, port, name } = mongo;
  console.log({ DB_PROFILE: `${host} ${name} runing on port ${port}` });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

// const multer = require("multer");
// const upload = multer({
//   //  dest: "dresses", //router.post buffer
//   limits: { fileSize: 1000000 },
//   fileFilter(req, file, cb) {
//     if (
//       !file.originalname.endsWith(".jpg") &&
//       !file.originalname.endsWith(".png")
//     ) {
//       return cb(new Error("Please upload Png or Jpg file"));
//     }

//     cb(undefined, true);
//   },
// });

// app.post(
//   "dresses/upload",
//   upload.single("upload"),
//   async (req, res) => {
//     req.dress.img = req.file.buffer; //instead of file destination
//     await req.dress.save();
//     res.send();
//   },
//   (error, req, res, next) => {
//     res.status(400).send({ error: error.message }); //
//     //middleware
//   }
// );

// //dressRouter
// const multer = require("multer");
// const upload = multer({ dest: "dresses" });

// dressRouter.post(
//   "/dresses/upload/:id",
//   upload.single("dress") /*dress is a key when registering the middleware*/,
//   (req, res) => {
//     res.send();
//   }
// );
