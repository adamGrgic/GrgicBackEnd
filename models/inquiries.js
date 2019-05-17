const mongoose = require('mongoose');


const Inquiries = mongoose.model('Inquiries', {
  // imagePath: {type: String, required: true},
  DesignService: { type: String },
  Business: { type: String },
  Email: { type: String },
  Budget: { type: String },
  OtherComments: {type: String }
}, 'Inquiries');

module.exports = { Inquiries };
