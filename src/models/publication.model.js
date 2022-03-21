const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema(
  {
    name: { required: true, type: String },
  },
  { timestamp: true, versionKey: false }
);


module.exports = new mongoose.model("publication", publicationSchema);