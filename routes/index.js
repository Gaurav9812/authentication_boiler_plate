const express = require("express");
const ROUTER = express.Router();
const UserController = require("../controllers/UserController");
ROUTER.get("/", function (req, res, next) {
  return res.render("home.ejs");
});

ROUTER.get("/login", UserController.logIn);

ROUTER.get("/signup", UserController.signUp);

ROUTER.post("/create-user", UserController.createUser);

module.exports = ROUTER;
