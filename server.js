"use strict";

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');


const routes = require('./routes/');

const logger = require('./srvs/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'www')));

app.use(routes);
app.use(logger);

app.get('/', (req, res) => {

 res.redirect('/notes');

});

//middleware function to log to the database all server requests


mongoose.connect('mongodb://localhost:27017/evernode');

mongoose.connection.once('open', () => {

  app.listen(PORT, () => {
  console.log(`Evernone serving on port ${PORT}`);
  });

});