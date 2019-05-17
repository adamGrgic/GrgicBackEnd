const mongoose = require('mongoose');


const Portfolio = mongoose.model('Portfolio', {
  // imagePath: {type: String, required: true},
  name: { type: String },
  description: { type: String },
  image: { type: String },
}, 'Portfolio');

module.exports = { Portfolio };
