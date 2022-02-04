const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const User = require("../model/userModel");
const {
  addUser,
  updateUser,
  getAllUsers,
  getUser,
  deleteUser,
} = require("../controllers/user.controllers");

router.post("/users", addUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

module.exports = router;
