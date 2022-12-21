const express = require("express");
const ROUTER = express.Router();
const UserController = require("../controllers/UserController");
const { checkAuthenticated } = require("../utils/app-control");

ROUTER.get("/", checkAuthenticated, function (req, res, next) {
  return res.render("home.ejs");
});

module.exports = ROUTER;
