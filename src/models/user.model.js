const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { required: true, type: String, min: 3, max: 30 },
    lastName: { required: false, type: String, min: 3, max: 30 },
    age: { required: true, type: Number, min: 1, max: 150 },
    email: { required: true, type: String, unique: true },
    profileImage: [{ required: true, type: String}],
  },
  {
    timestamp: true,
    versionKey: false,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;