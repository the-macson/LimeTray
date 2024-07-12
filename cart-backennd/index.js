const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const sequelize = require("./src/config/db.config");
const api = require("./src/api");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cart API",
      version: "1.0.0",
    },
  },
  apis: ["./src/api/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

app.use(cors());
app.use(express.json());
app.use("/api", api);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully.");
  sequelize.sync({ force: true }).then(() => {
    console.log("Database created successfully.");
  });
});

app.listen(8080, () => {
  console.log("Server is running on port 3000");
});
