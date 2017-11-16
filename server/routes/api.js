const express = require('express');
const PImage = require( 'mongoose').model( 'PImage');
const router = new express.Router();

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
router.post( '/favourite', (req,res) => {
  PImage.addFavourite( req.body, function( err, result){
    if( err) console.error( "add favourite failed:", err);
    res.json( result);
  })
});

module.exports = router;
