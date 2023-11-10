const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: false,
  },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
