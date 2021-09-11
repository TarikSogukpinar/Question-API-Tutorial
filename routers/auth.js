const express = require("express");
const {
  register,
  login,
  getUser,
  logout,
  imageUpluoad,
  forgotPassword
} = require("../controllers/auth");
const profileImageUpluoad = require("../middlewares/libraries/profileImagesUpluoad");
const { getAccessToRoute } = require("../middlewares/authorization/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getAccessToRoute, getUser);
router.get("/logout", getAccessToRoute, logout);
router.post("/forgotpassword", forgotPassword);
router.get(
  "/upluoad",
  [getAccessToRoute, profileImageUpluoad.single("profile_image")],
  imageUpluoad
);

module.exports = router;
