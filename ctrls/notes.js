"use strict";

const Note = require('../models/note');

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

  Note.findOne({"_id" : req.params.id}, (err, foundNote) => {
    if (err) throw err;
    res.render('show-note', {note: foundNote});
  })

};

module.exports.delete = (req, res) => {

  Note.remove({"_id" : req.params.id}, (err) => {
    if (err) throw err;
    res.redirect('/');
  })

};

module.exports.edit = (req, res) => {

  Note.findOne({"_id" : req.params.id}, (err, foundNote) => {
    if (err) throw err;
    res.render('new-note', {note: foundNote});
  })

};

module.exports.update = (req, res) => {

  Note.findOne({"_id" : req.params.id}, (err, foundNote) => {
    if (err) throw err;

    foundNote.text = req.body.text;
    foundNote.author = req.body.author;
    foundNote.title = req.body.title;

    foundNote.save(function(err){
      if (err) throw err;
      res.redirect('/notes/' + req.params.id);
    })

  })

};