const express = require("express");
const ROUTER = express.Router();
const UserController = require("../controllers/UserController");

ROUTER.get("/", function (req, res, next) {
  return res.render("home.ejs");
});

ROUTER.use("/profile", require("./profile"));

ROUTER.get("/login", UserController.logIn);

ROUTER.get("/logout", UserController.destroySession);

ROUTER.get("/signup", UserController.signUp);

ROUTER.post("/create-user", UserController.createUser);

ROUTER.post("/create-session", UserController.createSession);

module.exports = ROUTER;
