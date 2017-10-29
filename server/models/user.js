const mongoose = require( 'mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true}
  },
  name: String,
  twitterId: Number
});

module.exports = mongoose.model('User', UserSchema);
