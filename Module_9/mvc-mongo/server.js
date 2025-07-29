require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");

// Parse requests of content-type: application/json
app.use(express.json());

// Simple home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application D Rosales." });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
