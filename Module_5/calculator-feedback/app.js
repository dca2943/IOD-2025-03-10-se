const express = require("express");
const app = express();

const calculatorRoutes = require("../express/routes/calculator.routes");

app.use("/", express.static("Public"));
app.use("/calculator", calculatorRoutes);

module.exports = app;
