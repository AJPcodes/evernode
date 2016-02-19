const express = require('express');
const router = express.Router();

const Note = require('../models/note');
const Category = require('../models/category');
const categoryCtrl = require('../ctrls/categories');

router.param('id', (req, res, next, id) => {

  Category.findById(id, (err, category) => {
    if (err) throw err;

    req.category = category;

    Note.find({'category' : category._id}, (err, notes) => {
    if (err) throw err;

    req.notes = notes;
    next();

    });
  });

});

router.get('/categories', categoryCtrl.all);
router.post('/categories', categoryCtrl.create);
router.get('/categories/new', categoryCtrl.new);
router.get('/categories/:id', categoryCtrl.show);
// router.get('/categories/:id/edit', categoryCtrl.edit);
// router.delete('/categories/:id', categoryCtrl.delete);
// router.put('/categories/:id', categoryCtrl.update);


module.exports = router;