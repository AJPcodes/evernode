"use strict";

const mongoose = require('mongoose');

const Note = mongoose.model('notes', mongoose.Schema({

  title: String,
  author: String,
  text: String

}));

module.exports = Note;