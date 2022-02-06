const User = require("../model/userModel");

const addUser = async (req, res) => {
  const foundUser = User.findOne({ id: req.params.id });

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    id: req.body.id,
  });
  try {
    await user.save();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).send({ error: e.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    console.log(user);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const updateUser = async (req, res) => {
  //not needed now.
};

const deleteUser = async (req, res) => {
  // defined later.
};

const addToWishlist = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    console.log("find");
    user.wishlist.push(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
const deleteFromWishlist = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.find({ id: id });
    user.wishlist.filter((item) => item.id !== req.body.dress.id);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const addItems = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    console.log("user is ", user);
    user.myItems.push(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const deleteFromItems = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.find({ id: id });
    user.myItems.filter((item) => item.id !== req.body.dress.id);
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const getWishlist = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });
    res.status(200).send(user.wishlist);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
const getMyItems = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.find({ id: id });
    console.log(user);
    return res.status(200).send(user.myItems);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

module.exports = {
  addUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
  addToWishlist,
  deleteFromWishlist,
  addItems,
  deleteFromItems,
  getWishlist,
  getMyItems,
};
