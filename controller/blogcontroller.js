const express = require('express');

const router = express.Router();
require('mongoose');
const { ObjectId } = require('mongoose').Types;

// makes a request
const { Blogs } = require('../models/Blogs');

router.get('/', (req, res) => res.json('Inquiry Root'));
router.get('/list', (req, res) => {
  Blogs.find((err, docs) => {
    if (!err) { return res.send(docs); }
    return console.log(`Error in Retriving Inquriries :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Blogs.findById(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Retrieving Product :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.post('/', (req, res) => {
  const blogs = new Blogs({
    // grabs the data from the body
    Title: req.body.Title,
    Image: req.body.Image,
    Author: req.body.Author,
  });
    // saves the data
  blogs.save((err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Product Savev :${JSON.stringify(err, undefined, 2)}`); }
  });
});

// updates existing record
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  const blogs = {
    // grabs the data from the body
    Title: req.body.Title,
    Image: req.body.Image,
    Author: req.body.Author,
  };
  // eslint-disable-next-line max-len
  return blogs.findByIdAndUpdate(req.params.id, { $set: blogs }, { new: true }, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in Inquiries Update :${JSON.stringify(err, undefined, 2)}`); }
  });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Blogs.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { res.send(doc); } else { console.log(`Error in inquiries delete :${JSON.stringify(err, undefined, 2)}`); }
  });
});


module.exports = router;
