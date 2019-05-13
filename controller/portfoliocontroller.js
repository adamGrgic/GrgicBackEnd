const express = require('express');

const router = express.Router();
require('mongoose');
const { ObjectId } = require('mongoose').Types;

// makes a request
const { Portfolio } = require('../models/portfolio');

router.get('/', (req, res) => res.json('Portfolio Root'));
router.get('/list', (req, res) => {
  Portfolio.find((err, docs) => {
    if (!err) { return res.send(docs); }
    return console.log(`Error in Retriving Portfolios :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Portfolio.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Retrieving Portfolio :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.post('/', (req, res) => {
  const portfolio = new Portfolio({
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  });
    // saves the data
  portfolio.save((err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Portfolio Savev :${JSON.stringify(err, undefined, 2)}`); }
  });
});

// updates existing record
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  const portfolio = {
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    file: req.body.file,
  };
  // eslint-disable-next-line max-len
  return Portfolio.findByIdAndUpdate(req.params.id, { $set: portfolio }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Product Update :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Portfolio.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in portfolio delete :${JSON.stringify(err, undefined, 2)}`); }
  });
});


module.exports = router;
