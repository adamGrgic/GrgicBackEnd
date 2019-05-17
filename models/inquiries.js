const mongoose = require('mongoose');


const Inquiries = mongoose.model('Inquiries', {
  // imagePath: {type: String, required: true},
  name: { type: String },
  description: { type: String },
  image: { type: String },
}, 'Inquiries');

module.exports = { Inquiries };
