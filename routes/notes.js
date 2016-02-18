const express = require('express');
const router = express.Router();

const noteCtrl = require('../ctrls/notes');

router.get('/notes/new', noteCtrl.new);

router.get('/notes/:id', noteCtrl.show);

router.post('/notes', noteCtrl.create);

router.delete('/notes/:id', noteCtrl.delete);

module.exports = router;