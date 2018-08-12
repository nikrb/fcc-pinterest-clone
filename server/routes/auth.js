const express = require('express');
const passport = require( 'passport');

const router = new express.Router();

router.get( "/login/twitter", function(req, res, next) {
  console.log( "twitter login session:", req.session);
  console.log('twitter callback:', process.env.TWITTER_CALLBACK_URL);
  return passport.authenticate('twitter')(req, res, next);
});

router.get( "/callback/twitter", function(req, res, next) {
  console.log( "twitter callback session:", req.session);
  const redir = process.env.NODE_ENV === "production"?"/":"http://127.0.0.1:3000/";
  return passport.authenticate('twitter', {
    successRedirect: redir,
    failureRedirect: redir
  })(req, res, next);
});

router.get( "/user", function( req, res){
  console.log( "GET /auth/user :", req.user);
  const user = req.user?{_id: req.user._id, name: req.user.name}:{};
  res.send( {success: req.user?true:false, user });
});

router.get( "/logout", function(req, res) {
    req.logout();
    res.send({success: true});
});


module.exports = router;
