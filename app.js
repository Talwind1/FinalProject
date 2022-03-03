const express = require("express");
const mongoose = require("mongoose");
const { MONGOOSE_URI, CorsConfig } = require("./config.js");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dressRouter = require("./src/router/dressRouter");
const userRouter = require("./src/router/userRouter");
const path = require("path");
var bodyParser = require("body-parser");

app.use(cors());
app.use(cors(CorsConfig));
app.use(express.urlencoded({ extended: false })); //alex
app.use(express.json());
app.use("/api", dressRouter);
app.use("/api", userRouter);
const publicPath = path.join(__dirname, "client/build");
app.use(express.static(publicPath));
app.use(bodyParser.json());

mongoose.connect(MONGOOSE_URI, (error, mongo) => {
  if (error) return console.log(error);
  const { host, port, name } = mongo;
  console.log({ DB_PROFILE: `${host} ${name} runing on port ${port}` });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
// app.configure(function () {
//   app.use(express.bodyParser());
// });
// var bodyParser = require('body-parser')

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())
