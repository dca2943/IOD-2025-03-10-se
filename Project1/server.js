const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) return res.status(500).send("Error loading users");
    res.json(JSON.parse(data));
  });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
//Using a Backend Server
// This code sets up a simple Express server that serves user data from a JSON file.
