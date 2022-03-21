const express = require("express");

const Book = require("../models/book.model");

const router = express.Router();

router.get("",  async (req, res)=> {
  try {
    const books = await Book.find().lean().exec();
    return res.status(201).send({ books: books });
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
});

router.post("/books", async (req, res) => {
  const book = await Book.create(re)
})

module.exports = router;
