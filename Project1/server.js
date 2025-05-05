const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.post("/create-account", (req, res) => {
  if (!req.body.username || !req.body.password)
    return res.status(400).json({ error: "Missing details." });
  users.push(req.body);
  res.json({ message: "Account created!" });
});

app.post("/itinerary", (req, res) => {
  if (!req.body.destination || !req.body.date || !req.body.travelers)
    return res.status(400).json({ error: "Missing details." });
  res.json({
    message: `Itinerary for ${req.body.travelers} travelers in ${req.body.destination} on ${req.body.date}!`,
  });
});

app.listen(3000, () => console.log("Server running..."));

//Backend (server.js)
