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
    res.render('note', {note: foundNote});
  })

};