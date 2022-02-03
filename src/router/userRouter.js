const express = require("express");
const req = require("express/lib/request");
const router = express.Router();
const User = require("../model/userModel");

router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
