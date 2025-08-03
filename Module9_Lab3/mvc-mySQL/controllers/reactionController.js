const { Reaction } = require("../models");

const likePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const like = await Reaction.create({ postId, userId });
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ error: "Failed to like post" });
  }
};

const getReactionsByPost = async (req, res) => {
  try {
    const reactions = await Reaction.findAll({
      where: { postId: req.params.postId },
    });
    res.status(200).json(reactions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reactions" });
  }
};

module.exports = { likePost, getReactionsByPost };
