const Models = require("../models");

const getUsers = (res) => {
  Models.User.find({})
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const createUser = (data, res) => {
  new Models.User(data)
    .save()
    .then((data) => res.status(200).json({ result: 200, data }))
    .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

module.exports = { getUsers, createUser };
