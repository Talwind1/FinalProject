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
  addItems,
  deleteFromItems,
  getWishList,
  getMyItems,
} = require("../controllers/user.controllers");

router.post("/users", addUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUser);

router.delete("/users/:id", deleteUser);
router.patch("/users/:id", updateUser);

router.put("/users/wishadd/:id", addToWishlist);
router.get("/users/wishlist/:id", getWishList);
router.put("/users/wishdel/:id", deleteFromWishlist);

router.get("/users/myitems/:id", getMyItems);
router.put("/users/itemadd/:id", addItems);
router.put("/users/itemdel/:id", deleteFromItems);

module.exports = router;
