const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const User = require('../models/user');

passport.use(
  new TwitterStrategy({
      consumerKey: process.env.CONSUMER_KEY,
      consumerSecret: process.env.CONSUMER_SECRET,
      callbackURL: process.env.TWITTER_CALLBACK_URL,
    },
    /* eslint-disable func-names, prefer-arrow-callback */
    function(accessToken, refreshToken, profile, done) {
      const searchQuery = {
        twitterId: profile.id,
      };
      const update = {
        twitterId: profile.id,
        name: profile.displayName,
        // eslint-disable-next-line no-underscore-dangle
        email: profile.email,
      };
      const updateOptions = {
        upsert: true,
        new: true,
      };
      User.findOneAndUpdate(searchQuery, update, updateOptions, function(
        err,
        user
      ) {
        return done(err, user);
      });
    }
  )
);
