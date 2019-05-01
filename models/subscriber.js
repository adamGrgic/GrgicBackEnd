const mongoose = require('mongoose');


const Subscriber = mongoose.model('Subscribers', {
  // imagePath: {type: String, required: true},
  name: { type: String },
  email: { type: String },
  occupation: { type: String },

});

module.exports = { Subscriber };
