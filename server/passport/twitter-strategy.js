const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('mongoose').model('User');

module.exports = function(){
  passport.use(new TwitterStrategy({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    callbackURL: "/auth/callback/twitter"
  },
  function(accessToken, refreshToken, profile, done) {
    var searchQuery = {
      twitterId: profile.id
    };
    var update = {
      twitterId: profile.id,
      name: profile.displayName,
      email:profile.email
    };
    var updateOptions = {
      upsert: true
    };
    User.findOneAndUpdate(searchQuery, update, updateOptions, function(err, user) {
        return done(err, user);
    });
  }));
}
