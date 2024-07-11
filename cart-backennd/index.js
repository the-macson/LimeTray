const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const sequelize = require("./src/config/db.config");
const api = require("./src/api");

app.use(cors());
app.use(express.json());
app.use("/api", api);

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
