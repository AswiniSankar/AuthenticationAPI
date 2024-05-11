const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileVisibility: { type: Boolean, default: true }, // true for public, false for private
});

module.exports = mongoose.model("User", userSchema);
