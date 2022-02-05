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
  addToWishlist,
  deleteFromWishlist,
  addToItems,
  deleteFromItems,
} = require("../controllers/user.controllers");

router.post("/users", addUser);
router.get("/users", getAllUsers);
router.post("/users/byid", getUser);
//router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

router.put("/users/wishadd/:id", addToWishlist);
router.put("/users/wishdel/:id", deleteFromWishlist);

router.put("/users/itemadd/:id", addToItems);
router.put("/users/itemdel/:id", deleteFromItems);

module.exports = router;
