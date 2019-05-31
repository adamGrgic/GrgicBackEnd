/* eslint-disable no-console */
const keySecret = process.env.SECRET_KEY;
const express = require('express');
const stripe = require('stripe')(keySecret);

const router = express.Router();


router.post('/', (req, res) => {
  const amount = 500;

  stripe.customers.create({
    email: req.body.email,
    card: req.body.id,
  })
    .then(customer => stripe.charges.create({
      amount,
      description: 'Sample Charge',
      currency: 'usd',
      customer: customer.id,
    }))
    .then(charge => res.send(charge))
    .catch((err) => {
      console.log('Error:', err);
      res.status(500).send({ error: 'Purchase Failed' });
    });
});

module.exports = router;
