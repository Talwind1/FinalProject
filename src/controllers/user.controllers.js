const User = require("../model/userModel");

const addUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send({ error: e.message });
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
  const id = req.params._id;
  try {
    const user = await User.find({ id: id });
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

module.exports = { addUser, updateUser, getAllUsers, getUser, deleteUser };
