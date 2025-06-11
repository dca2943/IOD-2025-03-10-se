const express = require("express");
const app = express();
const port = 3000;

const calculatorRoutes = require("../express/routes/calculator.routes");

app.use("/", express.static("Public"));

app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
