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
        name: profile.username || `noname:${profile.id}`,
        // eslint-disable-next-line no-underscore-dangle
        email: profile.displayName || `noemail:${profile.id}`,
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
