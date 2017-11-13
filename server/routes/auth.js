const express = require('express');
const passport = require( 'passport');

const router = new express.Router();

router.get( "/login/twitter", function(req, res, next) {
  console.log( "twitter login")
  return passport.authenticate('twitter')(req, res, next);
});

router.get( "/callback/twitter", function(req, res, next) {
  console.log( "twitter callback:", process.env.NODE_ENV);
  return passport.authenticate('twitter', {
    successRedirect: "/",
    failureRedirect: "/"
  })(req, res, next);
});

function checkAuth(req, res, next) {
  console.log( "checkAuth isAuthenticated exists:", req.isAuthenticated?true:false);
  if (!req.isAuthenticated()) return res.status(401).send('Not authenticated');
  return next();
};

router.get( "/user", function( req, res){
  console.log( "GET /auth/user :", req.user);
  res.send( {success: req.user?true:false, user: req.user});
});

router.get( "/logout", function(req, res) {
    req.logout();
    res.send({success: true});
});


module.exports = router;
