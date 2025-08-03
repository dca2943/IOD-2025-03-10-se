const router = require("express").Router();
const {
  likePost,
  getReactionsByPost,
} = require("../controllers/reactionController");

router.post("/", likePost);
router.get("/:postId", getReactionsByPost);

module.exports = router;
