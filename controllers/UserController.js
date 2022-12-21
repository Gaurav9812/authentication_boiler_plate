const User = require("../models/user");
const { secretKey } = require("../utils/app-control");
const Crypto = require("crypto-js");
module.exports.signUp = function (req, res) {
  return res.render("signup");
};

module.exports.logIn = function (req, res) {
  return res.render("login");
};

module.exports.createUser = async function (req, res) {
  const {
    firstName,
    lastName,
    dob,
    email,
    password,
    confirmPassword,
    username,
  } = req.body;
  if (password === confirmPassword) {
    try {
      let passwordHash = Crypto.SHA256(password);
      let user = await User.create({
        name: {
          firstName: firstName,
          lastName: lastName,
        },
        email: email,
        username: username,
        dateOfBirth: dob,
        passwordHash: passwordHash,
      });
      if (user) {
        return res.redirect("login");
      }
    } catch (err) {
      console.log("error ", err);
    }
  }
  return res.redirect("back");
};

module.exports.createSession = async function (req, res) {
  const { email, password } = req.body;
  let user = await User.findOne({
    $or: [{ email: email }, { username: email }],
  });
  if (user) {
    let pass = Crypto.SHA256(password);

    // let bytes = Crypto.AES.decrypt(user.passwordHash, secretKey);
    // console.log("password ", bytes.toString(Crypto.enc.Utf8));
    // let pass = Crypto.AES.encrypt(password, secretKey).toString();

    if (pass == user.passwordHash) {
      res.cookie("user_id", user.id);
      return res.redirect("/profile");
    }
    console.log(pass, " === ", user.passwordHash);
  }

  console.log("User found", user);
  return res.redirect("back");
};
