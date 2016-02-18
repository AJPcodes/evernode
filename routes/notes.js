const express = require('express');
const router = express.Router();

const noteCtrl = require('../ctrls/notes');

router.post('/notes', noteCtrl.create);
router.get('/notes/new', noteCtrl.new);
router.get('/notes/:id/edit', noteCtrl.edit);
router.get('/notes/:id', noteCtrl.show);
router.delete('/notes/:id', noteCtrl.delete);
router.put('/notes/:id', noteCtrl.update);


module.exports = router;