const express = require("express");
const req = require("express/lib/request");
const Dress = require("../model/dressModel");

const dressRouter = express.Router();
const {
  getAllDresses,
  getDress,
  getDressesFiltered,
  deleteDress,
  updateDress,
  addDress,
} = require("../controllers/dress.conterollers");

dressRouter.get("/dresses", getAllDresses);
dressRouter.get("/dresses/:id", getDress);
dressRouter.post("/dresses", addDress);
dressRouter.patch("/dresses/:id", updateDress);
dressRouter.delete("/dresses/:id", deleteDress);
dressRouter.get("/dresses/filter", getDressesFiltered);

const multer = require("multer");
const sharp = require("sharp");
const PicUpload = require("../model/pictureModal");
// const sharp = require("sharp");
const upload = multer({
  limits: {
    fileSize: 1000000, // in 1000000 Bytes -> 1mb
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      // First one of setting File Type to upload
      return cb(new Error("Please upload an image"));
    }

    cb(undefined, true);
  },
});

dressRouter.post(
  "/dresses/upload",
  upload.single("upload"),
  async (req, res) => {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 250, height: 250 })
      .toBuffer();
    // const dress = new Dress({
    //   color: req.body.color,
    //   size: req.body.size,
    //   location: req.body.location,
    //   price: req.body.price,
    //   picture: req.file({ buffer }),
    // });
    const dress = await new PicUpload({ buffer });
    // req.dress.picture = pic;
    dress.save();
    res.send(dress);
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = dressRouter;
