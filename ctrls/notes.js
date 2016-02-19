"use strict";

const Note = require('../models/note');
const Category = require('../models/category');

module.exports.all = (req, res) => {

  Note
  .find()
  .populate('category')
  .exec((err, notes)=>{
  if (err) throw err;

  res.render('note-index', {notes: notes});
  })

};

module.exports.new = (req, res) => {

  Category.find((err, categories)=>{
  if (err) throw err;
  console.log(categories);
  res.render('new-note', {categories: categories});
  })

};

module.exports.create = (req, res) => {

  Note.create(req.body, (err, note) => {
    if (err) throw err
    res.redirect(`/notes/${note._id}`);
  });

};

module.exports.show = (req, res) => {

  res.render('show-note', {note: req.note});

};

module.exports.delete = (req, res) => {

  req.note.remove((err) => {
    if (err) throw err;
    res.redirect('/');
  })

};

module.exports.edit = (req, res) => {

  Category.find((err, categories)=>{
  if (err) throw err;
  res.render('new-note', {categories: categories, note: req.note});
  })



};

module.exports.update = (req, res) => {

    req.note.update(req.body, function(err){
      if (err) throw err;
      res.redirect('/notes/' + req.note._id);
    })

};