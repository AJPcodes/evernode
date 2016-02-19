"use strict";

const mongoose = require('mongoose');

const Category = mongoose.model('Categories', mongoose.Schema({

  title: String,

}));

module.exports = Category;