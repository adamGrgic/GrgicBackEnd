const express = require('express');

const router = express.Router();
require('mongoose');
const { ObjectId } = require('mongoose').Types;

// makes a request
const { Inquiries } = require('../models/inquiries');

router.get('/', (req, res) => res.json('Inquiry Root'));
router.get('/list', (req, res) => {
  Inquiries.find((err, docs) => {
    if (!err) { return res.send(docs); }
    return console.log(`Error in Retriving Inquriries :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Inquiries.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Retrieving Product :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.post('/', (req, res) => {
  const inquiries = new Inquiries({
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });
    // saves the data
  inquiries.save((err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Product Savev :${JSON.stringify(err, undefined, 2)}`); }
  });
});

// updates existing record
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  const inquiries = {
    // grabs the data from the body
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    file: req.body.file,
  };
  return Inquiries.findByIdAndUpdate(req.params.id, { $set: inquiries }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Inquiries Update :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Inquiries.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in inquiries delete :${JSON.stringify(err, undefined, 2)}`); }
  });
});


module.exports = router;
