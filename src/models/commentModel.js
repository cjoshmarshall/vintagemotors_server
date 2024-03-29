const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  comment: { type: String, required: true },
});

const commentModel = mongoose.model("comments", commentSchema);

module.exports = commentModel;
