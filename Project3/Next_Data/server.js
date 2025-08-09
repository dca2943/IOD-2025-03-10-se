import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import itineraryRoutes from "./routes/itineraryRoutes.js";
dotenv.config();
connectDB();

const app = express();
const PORT = parseInt(process.env.PORT) || 3001;

app.use(cors()); // Allows frontend requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Next_Data API is running",
    timestamp: new Date(),
  });
});

// itinerary API routes
app.use("/api/itinerary", itineraryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🔊 Server running at http://localhost:${PORT}`);
});
