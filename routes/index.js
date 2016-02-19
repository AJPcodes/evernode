"use strict";

const express = require('express');
const router = express.Router();

const notes = require('./notes');
const categories = require('./categories');
router.use(notes);
router.use(categories);

module.exports = router;