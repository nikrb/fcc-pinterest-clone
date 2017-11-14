const express = require('express');
const passport = require( 'passport');

const router = new express.Router();

router.get( "/login/twitter", function(req, res, next) {
  console.log( "twitter login")
  return passport.authenticate('twitter')(req, res, next);
});

router.get( "/callback/twitter", function(req, res, next) {
  console.log( "twitter callback:", process.env.NODE_ENV);
  const redir = process.env.NODE_ENV === "production"?"/":"http://localhost:3000/";
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
