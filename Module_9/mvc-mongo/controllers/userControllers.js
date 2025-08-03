"use strict";

const Models = require("../models"); // assumes index.js exports { User }

const getUsers = (res) => {
  Models.User.find({})
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error("Get Users Error:", err.stack);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const createUser = (data, res) => {
  console.log("Creating user:", data);
  new Models.User(data)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error("Create User Error:", err.stack);
      res.status(500).send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  console.log("Updating user ID:", req.params.id);
  console.log("New data:", req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // ✅ Important for schema validation
  })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error("Update User Error:", err.stack); // ✅ Full stack trace
      res.status(500).send({ result: 500, error: err.message });
    });
};

const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => {
      console.error("Delete User Error:", err.stack);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
