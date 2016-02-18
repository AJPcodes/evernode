"use strict";

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  const Note = require('./models/note');
  Note.find((err, notes)=>{
  if (err) throw err;
  console.log(notes);
  res.render('index', {notes: notes});
  })

});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

app.get('/notes/:id', (req, res) => {

  const Note = require('./models/note');
  Note.findOne({"_id" : req.params.id}, (err, foundNote) => {
    if (err) throw err;
    res.render('note', {note: foundNote});
  })

});

app.post('/notes', (req, res) => {

  const Note = require('./models/note');

  Note.create(req.body, (err, note) => {
    if (err) throw err
    res.redirect(`/notes/${note._id}`);
  });
});

mongoose.connect('mongodb://localhost:27017/evernode');

mongoose.connection.once('open', () => {

  app.listen(PORT, () => {
  console.log(`Evernone serving on port ${PORT}`);
  });

});