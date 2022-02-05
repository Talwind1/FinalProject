const res = require("express/lib/response");
const Dress = require("../model/dressModel");

const getAllDresses = async (req, res) => {
  console.log("in the wrong route");
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

const addDress = async (req, res) => {
  const dress = new Dress(req.body);
  try {
    await dress.save();
    res.status(201).send({ dress });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const deleteDress = async (req, res) => {
  const { id } = req.params;
  try {
    const dress = await Dress.findByIdAndDelete(id);
    if (!dress) {
      return res.status(400).send({ error: "Cannot find dress" });
    }
    res.send(dress);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const updateDress = async (req, res) => {
  await Dress.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        size: req.body.size,
        location: req.body.location,
        url: req.body.url,
        color: req.body.url,
        price: req.body.price,
      },
    }
  );
  res.send("done");
};

const getDressesFiltered = async (req, res) => {
  const { size, color, location, price } = req.query;
  let filteredDress;
  try {
    if (size) filteredDress = await Dress.find({ size: size });
    if (color) filteredDress = await Dress.find({ color: color });
    if (location) filteredDress = await Dress.find({ location: location });
    if (price) filteredDress = await Dress.find({ price: price });
    if (!filteredDress) {
      res.status(200).send([]);
    }
    res.status(200).send(filteredDress);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = {
  getAllDresses,
  getMyDresses,
  getDressesFiltered,
  deleteDress,
  updateDress,
  addDress,
};
