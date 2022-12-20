const express = require("express");
const PORT = 3000;
const PATH = require("path");
const ROUTES = require("./routes/index");
const app = express();
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.static("./assets"));

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", PATH.join(__dirname, "views"));

app.use(expressLayouts);
app.use("/", require("./routes"));
//Deprecated
// app.use(express.urlencoded());

app.listen(PORT, function (err) {
  if (err) {
    console.log(`Error while running on port ${PORT} ${err}`);
  }
  console.log(`Server is up and running on PORT ${PORT}`);
});
