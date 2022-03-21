const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { required: true, type: Number },
    coverImage: [{ required: true, type: String, max: 1 }],
    content: { required: true, type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    publicationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "publication",
      required: true,
    },
  },
  { versionKey: false, timestamp: true }
);

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
