const { Comment } = require("../models");

const createComment = async (req, res) => {
  try {
    const { content, postId, userId } = req.body;
    const comment = await Comment.create({ content, postId, userId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment" });
  }
};

const getCommentsByPost = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      where: { postId: req.params.postId },
      include: ["user"],
    });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

module.exports = { createComment, getCommentsByPost };
