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

const getMyDresses = async () => {
  n;
  //authenticateeeeeee
  const myDresses = await Dress.find({ id });
  return myDresses;
};

const getDressesFiltered = async () => {
  //each filter and multiple filterss
  const myDresses = await Dress.find({ price });
};

const deleteDress = async () => {
  const myDresses = await Dress.findOneAndDelete({ req }); //selected dress
  //return the found?
};
const updateDress = async () => {
  const myDresses = await Dress.findOneAndUpdate({ req }); //selected dress
};
const addDress = async (req, res) => {
  const dress = new Dress(req.body);
};

module.exports = {
  getAllDresses,
  getMyDresses,
  getDressesFiltered,
  deleteDress,
  updateDress,
  addDress,
};
