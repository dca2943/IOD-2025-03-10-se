const Models = require("../models");

const getComments = (res) => {
  Models.Comment.find({})
    .populate("userId", "username")
    .populate("postId", "title")
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const createComment = (data, res) => {
  new Models.Comment(data)
    .save()
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

module.exports = { getComments, createComment };
