module.exports.signUp = function (req, res) {
  return res.render("signup");
};

module.exports.logIn = function (req, res) {
  return res.render("login");
};

module.exports.createUser = function (req, res) {
  console.log(req.body);
};
