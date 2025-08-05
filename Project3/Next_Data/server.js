import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import destinationRoutes from "./routes/destinationRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = parseInt(process.env.PORT) || 3001;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Next_Data API is running",
    timestamp: new Date(),
  });
});

// Destination API routes
app.use("/api/destinations", destinationRoutes);

// Auto-port finder if in use
const startServer = (port) => {
  const server = app.listen(port, () => {
    console.log(
      `🔊 Server running at http://localhost:${server.address().port}`
    );
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`⚠️ Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("❌ Server error:", err);
      process.exit(1);
    }
  });
};

startServer(PORT);
