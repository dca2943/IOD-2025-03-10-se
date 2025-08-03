"use strict";

const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.DB_URI || "mongodb://127.0.0.1:27017/myFirstDatabase";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((error) => console.error("❌ MongoDB Error:", error.message));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = { mongoose, db };
