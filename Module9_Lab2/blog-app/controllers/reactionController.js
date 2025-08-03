const Models = require("../models");

const getReactions = (res) => {
  Models.Reaction.find({})
    .populate("userId", "username")
    .populate("postId", "title")
    .populate("commentId", "content")
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const createReaction = (data, res) => {
  new Models.Reaction(data)
    .save()
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

module.exports = { getReactions, createReaction };
