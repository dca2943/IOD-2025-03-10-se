const express = require("express");
const calculatorRoutes = require("./routes/calculatorRoute");

const app = express();
app.use("/calculator", calculatorRoutes);

app.listen(3000, () => {
  console.log("Calculator app running on port 3000");
});
