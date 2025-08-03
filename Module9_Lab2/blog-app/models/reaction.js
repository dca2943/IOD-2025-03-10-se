const mongoose = require("mongoose");

const reactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    commentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
    content: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reaction", reactionSchema);
