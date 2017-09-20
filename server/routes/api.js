const express = require('express');
const PImage = require( 'mongoose').model( 'PImage');
const router = new express.Router();

router.post('/userimages', (req, res) => {
  PImage.getByUserId( req.body, function( err, docs){
    if( err) console.error( "get user images failed:", err);
    res.json( docs);
  });
});

router.post( '/userimage', (req, res) => {
  PImage.create( req.body, function( err, result){
    if( err) console.error( "create pimage failed:", err);
    res.json( result);
  });
});
router.delete( '/userimage', (req,res) => {
  PImage.deleteImage( req.body, function( err, result){
    if( err) console.error( "delete pimage failed:", err);
    res.json( result);
  });
});

module.exports = router;
