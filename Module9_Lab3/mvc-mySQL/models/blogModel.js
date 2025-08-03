import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Blog = sequelize.define(
  "Blog",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: DataTypes.TEXT,
    author: DataTypes.STRING,
  },
  {
    timestamps: true,
  }
);

export default Blog;
