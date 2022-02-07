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
    // console.log("find");
    const existDress = user.wishlist.find((item) => item._id === req.body._id);
    if (!existDress) {
      user.wishlist.push(req.body);
      await user.save();
    }
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};
const deleteFromWishlist = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOne({ id: id });

    user.wishlist = user.wishlist.filter((item) => item._id !== req.body._id);
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

    user.myItems.push(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
};

const deleteFromItems = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ id: id });
    // console.log("user is", user);
    // console.log("req is", req.body);
    const myitems = user.myItems.filter((item) => item._id !== req.body._id);
    // console.log(myitems);
    user.myItems = myitems;
    await user.save();
    // console.log("new ", user);
    res.status(200).send(user.myItems);
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
};
