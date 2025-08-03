const router = require("express").Router();
const {
  createComment,
  getCommentsByPost,
} = require("../controllers/commentController");

router.post("/", createComment);
router.get("/:postId", getCommentsByPost);

module.exports = router;
