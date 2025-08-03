const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers"); // ✅ matches filename

// GET all users
router.get("/", (req, res) => {
  userControllers.getUsers(res);
});

// POST new user
router.post("/create", (req, res) => {
  userControllers.createUser(req.body, res);
});

// PUT update user by ID
router.put("/:id", (req, res) => {
  userControllers.updateUser(req, res); // ✅ consistent reference
});

// DELETE user by ID
router.delete("/:id", (req, res) => {
  userControllers.deleteUser(req, res);
});

module.exports = router;
