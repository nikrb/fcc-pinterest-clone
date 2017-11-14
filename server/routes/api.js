const express = require('express');
const PImage = require( 'mongoose').model( 'PImage');
const router = new express.Router();

function checkAuth(req, res, next) {
  if (!req.isAuthenticated()) {
    console.log( "@api.checkAuth user not authenticated");
    return res.status(401).send('Not authenticated');
  }
  return next();
};

router.post('/userimages', checkAuth, (req, res) => {
  PImage.getByUserId( req.body, function( err, docs){
    if( err) console.error( "get user images failed:", err);
    res.json( docs);
  });
});


router.post( '/userimage', checkAuth, (req, res) => {
  PImage.create( req.body, function( err, result){
    if( err) console.error( "create pimage failed:", err);
    res.json( result);
  });
});
router.delete( '/userimage', checkAuth, (req,res) => {
  PImage.deleteImage( req.body, function( err, result){
    if( err) console.error( "delete pimage failed:", err);
    res.json( result);
  });
});
router.post( '/favourite', checkAuth, (req,res) => {
  PImage.addFavourite( req.body, function( err, result){
    if( err) console.error( "add favourite failed:", err);
    res.json( result);
  })
});

module.exports = router;
