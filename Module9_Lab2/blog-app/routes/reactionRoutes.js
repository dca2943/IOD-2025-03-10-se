const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => Controllers.reactionController.getReactions(res));
router.post("/create", (req, res) =>
  Controllers.reactionController.createReaction(req.body, res)
);

module.exports = router;
