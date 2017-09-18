const mongoose = require( 'mongoose');

const PImageSchema = new mongoose.Schema({
  url: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String
});

module.exports = mongoose.model('PImage', PImageSchema);
