const Models = require("../models");

const getPosts = (res) => {
  Models.Post.find({})
    .populate("userId", "username email")
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const createPost = (data, res) => {
  new Models.Post(data)
    .save()
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

module.exports = { getPosts, createPost };
