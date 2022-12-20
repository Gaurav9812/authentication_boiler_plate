const express = require("express");
const ROUTER = express.Router();

ROUTER.get("/", function (req, res, next) {
  return res.render("home.ejs");
});

module.exports = ROUTER;
