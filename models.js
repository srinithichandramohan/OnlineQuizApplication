// models.js

const mongoose = require('mongoose');

// Define how each quiz question looks
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  options: {
    type: [String],
    required: true
  },
  correctAnswer: {
    type: String,
    required: true
  }
});

// Create a model (table) named 'Question'
const Question = mongoose.model('Question', questionSchema);

// Export it so server.js can use it
module.exports = Question;
