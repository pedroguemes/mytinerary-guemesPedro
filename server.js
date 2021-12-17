require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
const passport = require('passport')
require("./config/database");

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use("/api", Router);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
