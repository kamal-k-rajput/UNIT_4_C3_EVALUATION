const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: { required: true, type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "book",
      required: true,
    },
  },
  { timestamp: true, versionKey: false }
);

module.exports = new mongoose.model("comment", commentSchema);
