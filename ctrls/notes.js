"use strict";

const Note = require('../models/note');

module.exports.all = (req, res) => {

  Note.find((err, notes)=>{
  if (err) throw err;
  console.log(notes);
  res.render('note-index', {notes: notes});
  })

};

module.exports.new = (req, res) => {
  res.render('new-note');
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

    res.render('new-note', {note: req.note});

};

module.exports.update = (req, res) => {

    req.note.update(req.body, function(err){
      if (err) throw err;
      res.redirect('/notes/' + req.note._id);
    })

};