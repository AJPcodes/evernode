"use strict";

const mongoose = require('mongoose');

const Note = mongoose.model('notes', mongoose.Schema({

  title: String,
  author: String,
  text: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories'
  }
}));

module.exports = Note;