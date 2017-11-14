const express = require('express');
const PImage = require( 'mongoose').model( 'PImage');

const router = new express.Router();

router.post('/pimages', (req, res) => {
  PImage.getAll( req.body, function( err, docs){
    if( err) console.error( "images getall failed:", err);
    res.json( docs);
  });
});

router.post('/userimages', (req, res) => {
  PImage.getByUserId( req.body, function( err, docs){
    if( err) console.error( "get user images failed:", err);
    res.json( docs);
  });
});

module.exports = router;
