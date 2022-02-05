const express = require("express");
const req = require("express/lib/request");
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

module.exports = dressRouter;
