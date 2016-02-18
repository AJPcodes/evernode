const express = require('express');
const router = express.Router();

const Note = require('../models/note');

router.get('/notes/new', (req, res) => {
  res.render('new-note');
});

router.get('/notes/:id', (req, res) => {

  Note.findOne({"_id" : req.params.id}, (err, foundNote) => {
    if (err) throw err;
    res.render('note', {note: foundNote});
  })

});

router.post('/notes', (req, res) => {

  Note.create(req.body, (err, note) => {
    if (err) throw err
    res.redirect(`/notes/${note._id}`);
  });
});

module.exports = router;