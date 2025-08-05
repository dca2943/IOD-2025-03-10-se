require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const { db } = require("./dbConnect");
const User = require("./models/user");
const userRoutes = require("./routes/userRoutes");

app.use(express.json()); // Parse JSON requests

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application Rosales." });
});

// Use user routes
app.use("/api/users", userRoutes);

// Create a new user
app.post("/create-user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
// Connect to MongoDB
