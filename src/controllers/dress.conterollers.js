const res = require("express/lib/response");
const Dress = require("../model/dressModel");

const getAllDresses = async (req, res) => {
  try {
    const dresses = await Dress.find({});
    if (!dresses) {
      res.status(400).send("no dresses found");
    }
    res.status(200).send(dresses);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const getMyDresses = async (req, res) => {
  const id = req.body.params.id;
  try {
    const dresses = Dress.find({ id: id });
    res.status(200).send(dresses);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const getDressesFiltered = async () => {
  //each filter and multiple filterss
  const myDresses = await Dress.find({ price });
};

const addDress = async (req, res) => {
  const dress = new Dress(req.body);
  try {
    await dress.save();
    res.status(201).send({ dress });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const deleteDress = async () => {
  const myDresses = await Dress.findOneAndDelete({ req }); //selected dress
  //return the found?
};
const updateDress = async () => {
  const myDresses = await Dress.findOneAndUpdate({ req }); //selected dress
};

module.exports = {
  getAllDresses,
  getMyDresses,
  getDressesFiltered,
  deleteDress,
  updateDress,
  addDress,
};
