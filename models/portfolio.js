const mongoose = require('mongoose');


const Portfolio = mongoose.model('Portfolio', {
  // imagePath: {type: String, required: true},
  title: { type: String },
  description: { type: String },
  image: { data: String, contentType: String },
});

module.exports = { Portfolio };
