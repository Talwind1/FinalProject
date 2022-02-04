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

dressRouter.get("/dresses", getAllDresses);
dressRouter.get("/dresses/me", getMyDresses);
dressRouter.post("/dresses", addDress);
dressRouter.patch("/dresses/:id", updateDress);
dressRouter.delete("/dresses/:id", deleteDress);

module.exports = dressRouter;
