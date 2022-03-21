const express = require("express");

const Publicaiton = require("../models/publication.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const user = await Publicaiton.find().lean().exec();
    return res.status(201).send({ user: user });
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
});

module.exports = router;
