const express = require("express");
const app = express();
const port = 3000;

const petRouter = require("./routes/pet.route");
const calculatorRoutes = require("./routes/calculator.routes");

app.use("/", express.static("Public"));
app.use("/pet-api", petRouter);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
