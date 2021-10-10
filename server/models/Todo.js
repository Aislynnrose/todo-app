const {Schema} = require('mongoose');

const todoSchema = new Schema({
  todo:{
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
});

module.exports = todoSchema;