const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const noteCtrl = require('../ctrls/notes');

router.param('id', (req, res, next, id) => {

  Note.findById(id, (err, note) => {
    if (err) throw err;

    req.note = note;
    next();
  });

});

router.get('/notes', noteCtrl.all);
router.post('/notes', noteCtrl.create);
router.get('/notes/new', noteCtrl.new);
router.get('/notes/:id/edit', noteCtrl.edit);
router.get('/notes/:id', noteCtrl.show);
router.delete('/notes/:id', noteCtrl.delete);
router.put('/notes/:id', noteCtrl.update);


module.exports = router;