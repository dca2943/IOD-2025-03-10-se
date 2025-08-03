import express from "express";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";
import reactionRoutes from "./routes/reactionRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import sequelize from "./db.js";
import Blog from "./models/blogModel.js";
import Comment from "./models/Comment.js";
import Reaction from "./models/Reaction.js";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/blogs", blogRoutes);
app.use("/api/reactions", reactionRoutes);
app.use("/api/comments", commentRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("MySQL connected");
    return sequelize.sync();
  })
  .catch((err) => console.error("Connection error:", err));

app.get("/", (req, res) => res.send("Welcome to Blog API with MySQL"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
