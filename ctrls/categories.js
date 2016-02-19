"use strict";

const Category = require('../models/category');

module.exports.all = (req, res) => {

  Category.find((err, categories)=>{
  if (err) throw err;
  res.render('category-index', {categories: categories});
  })

};

module.exports.new = (req, res) => {
  res.render('new-category');
};

module.exports.create = (req, res) => {

  Category.create(req.body, (err, category) => {
    if (err) throw err
    res.redirect(`/categories/${category._id}`);
  });

};

module.exports.show = (req, res) => {

  res.render('show-category', {category: req.category, notes: req.notes});

};

// module.exports.delete = (req, res) => {

//   req.category.remove((err) => {
//     if (err) throw err;
//     res.redirect('/');
//   })

// };

// module.exports.edit = (req, res) => {

//     res.render('new-category', {category: req.category});

// };

// module.exports.update = (req, res) => {

//     req.category.update(req.body, function(err){
//       if (err) throw err;
//       res.redirect('/notes/' + req.category._id);
//     })

// };