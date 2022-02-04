const express = require("express");
const mongoose = require("mongoose");
const { MONGOOSE_URI, CorsConfig } = require("./config.js");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dressRouter = require("./src/router/dressRouter");
const userRouter = require("./src/router/userRouter");

app.use(cors());
app.use(cors(CorsConfig));
app.use(express.urlencoded({ extended: false })); //alex
app.use(express.json());
app.use("/", dressRouter);
app.use(userRouter);

mongoose.connect(MONGOOSE_URI, (error, mongo) => {
  if (error) return console.log(error);
  const { host, port, name } = mongo;
  console.log({ DB_PROFILE: `${host} ${name} runing on port ${port}` });
});

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
