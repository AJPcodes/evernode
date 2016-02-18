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
  res.render('index');
});

app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

app.post('/notes', (req, res) => {

  const Note = require('./models/note');

  Note.create(req.body, (err, note) => {
    if (err) throw err
    console.log(note);
    res.redirect('/');
  });
});

mongoose.connect('mongodb://localhost:27017/evernode');

mongoose.connection.once('open', () => {

  app.listen(PORT, () => {
  console.log(`Evernone serving on port ${PORT}`);
  });

});