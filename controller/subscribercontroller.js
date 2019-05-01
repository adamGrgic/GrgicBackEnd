/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const { ObjectId } = require('mongoose').Types;

// makes a request
const { Subscriber } = require('../models/subscriber');

router.get('/list', (req, res) => {
  Subscriber.find((err, docs) => {
    if (!err) { return res.send(docs); }
    return console.log(`Error in Retriving Subscribers :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Subscriber.findById(req.params.id, (err, doc) => {
    if (!err) { return res.send(doc); }
    return console.log(`Error in Retrieving Subscribers :${JSON.stringify(err, undefined, 2)}`);
  });
});

router.post('/', (req, res) => {
  console.log('req', req);
  const subscriber = new Subscriber({
    // grabs the data from the body
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation,
  });
    // saves the data
  subscriber.save((err, doc) => {
    if (!err) { return res.send(doc); }
    return console.log(`Error in Subscriber Savev :${JSON.stringify(err, undefined, 2)}`);
  });
});

// updates existing record
router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  const subscriber = {
    // grabs the data from the body
    name: req.body.name,
    email: req.body.email,
    occupation: req.body.occupation,
  };
  return Subscriber.findByIdAndUpdate(req.params.id, { $set: subscriber },
    { new: true }, (err, doc) => {
      if (!err) { return res.send(doc); }
      return console.log(`Error in Subscriber Update :${JSON.stringify(err, undefined, 2)}`);
    });
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id)) { return res.status(404).send(`No record with given id : ${req.params.id}`); }

  return Subscriber.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) { return res.send(doc); }
    return console.log(`Error in subscriber delete :${JSON.stringify(err, undefined, 2)}`);
  });
});


module.exports = router;
