"use strict";

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const notes = require('./routes/notes');

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

app.use(notes);

mongoose.connect('mongodb://localhost:27017/evernode');

mongoose.connection.once('open', () => {

  app.listen(PORT, () => {
  console.log(`Evernone serving on port ${PORT}`);
  });

});