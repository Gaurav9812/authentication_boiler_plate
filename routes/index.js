const express = require("express");
const ROUTER = express.Router();
const UserController = require("../controllers/UserController");
const { checkAuthenticated, noAuthenticated } = require("../utils/app-control");

ROUTER.get("/", checkAuthenticated, function (req, res, next) {
  return res.render("home.ejs");
});

ROUTER.use("/profile", require("./profile"));

ROUTER.get("/login", noAuthenticated, UserController.logIn);

ROUTER.get("/logout", checkAuthenticated, UserController.destroySession);

ROUTER.get("/signup", noAuthenticated, UserController.signUp);

ROUTER.post("/create-user", noAuthenticated, UserController.createUser);

ROUTER.post("/create-session", noAuthenticated, UserController.createSession);

module.exports = ROUTER;
