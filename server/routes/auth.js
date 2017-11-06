const express = require('express');
const passport = require( 'passport');

const router = new express.Router();

router.get( "/login/twitter", function(req, res, next) {
  console.log( "twitter login")
  return passport.authenticate('twitter')(req, res, next);
});

router.get( "/callback/twitter", function(req, res, next) {
  console.log( "twitter callback:", process.env.NODE_ENV);
  const redir = process.env.NODE_ENV==="production"
    ?process.env.PROD_BASE_URL:"http://localhost:3000";
  console.log( "redir url:", redir);
  return passport.authenticate('twitter', {
    successRedirect: "/",
    failureRedirect: "/"
  })(req, res, next);
});

router.get( "/user", function( req, res){
  console.log( "GET /auth/user :", req.user);
  res.send( {success: req.user?true:false, user: req.user});
});

router.get( "/logout", function(req, res) {
    req.logout();
    res.send({success: true});
});


module.exports = router;
