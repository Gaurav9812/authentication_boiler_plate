const User = require("../models/user");

module.exports.secretKey = "keySecret";

module.exports.checkAuthenticated = async function (req, res, next) {
  if (req.cookies.user_id) {
    let user = await User.findById(req.cookies.user_id);
    if (user) {
      console.log("user set", user);
      res.locals.user = user;
      next();
      return;
    }
  }
  return res.redirect("/login");
};
