const passport = require('passport');

const User = require('mongoose').model('User');

passport.serializeUser(function(user, done) {
  return done(null, user.id);
});
passport.deserializeUser(function(userId, done) {
  console.log( "passport deserializeUser id:", userId);
  User.findById(userId, function(err, user) {
    return done(err, user);
  })
});
