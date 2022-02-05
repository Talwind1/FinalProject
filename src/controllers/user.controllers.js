const User = require("../model/userModel");

const addUser = async (req, res) => {
  // const foundUser = await User.find({ _id: req.body._id });
  // console.log("the req is", req.body, req.body.id);
  // if (!foundUser || foundUser.length < 1) {
  console.log("req body", req.body);
  const user = new User({
    // email: req.body.email,
    // name: req.body.name,
    id: req.body.googleId,
  });
  console.log(user);
  try {
    await user.save();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send({ error: e.message });
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
    const user = await User.find({ id: req.body.id });
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
    const user = await User.find({ id: id });
    user.wishlist.push(req.dress);
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

const addToItems = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.find({ id: id });
    user.myItems.push(req.dress);
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
module.exports = {
  addUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
  addToWishlist,
  deleteFromWishlist,
  addToItems,
  deleteFromItems,
};
