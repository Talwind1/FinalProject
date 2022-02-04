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
  //   const user = User.find({ id: req.params._id });
  //   const updates = Object.keys(req.body);
  //   const allowedUpdates = ["name", "email", "phone"];
  //   const isValidOperation = updates.every((update) =>
  //     allowedUpdates.includes(update)
  //   );
  //   if (!isValidOperation) {
  //     res.status(400).send({ error: "Invalid updates" });
  //   }
  //   try {
  //     updates.forEach((update) => (req.user[update] = req.body[update]));
  //     await req.user.save();
  //     res.send(req.user);
  //   } catch (e) {
  //     res.status(400).send(e.message);
  //   }
};

const deleteUser = async (req, res) => {
  // const user = req.params.id;
  // await User.remove
};

module.exports = { addUser, updateUser, getAllUsers, getUser, deleteUser };
