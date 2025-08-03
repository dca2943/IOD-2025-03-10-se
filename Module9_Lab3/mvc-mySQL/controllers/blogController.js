import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
