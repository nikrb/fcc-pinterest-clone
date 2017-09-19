const mongoose = require( 'mongoose');

const PImageSchema = new mongoose.Schema({
  url: String,
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  title: String,
  created: Date,
  favourites: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

PImageSchema.statics.create = function create( req_body, cb){
  const {owner, title, url} = req_body;
  const created = new Date();
  const PImage = mongoose.model( 'PImage');
  const new_img = new PImage( {owner, title, url, created});
  new_img.save( (err) => {
    let message = "image added",
        success = true;
    if( err){
      console.error( "PImage create failed:", err);
      success = false;
      message = "image not saved";
    }
    new_img.populate( 'owner', function( err, pimage){
      if( err) console.error( "new image save failed:", err);
      if( cb) cb( err, {success, message, pimage});
    });
  });
};

PImageSchema.statics.getByUserId = function getByUserId( req_body, cb){
  const {owner, offset, limit} = req_body;
  this.find( {owner}, [], {
    skip: offset,
    limit,
    sort: {created:1}
  })
  .exec( function( err, docs){
    if( err || !docs || docs.length === 0){
      console.error( "PImage find failed:", err);
      if( cb) cb( err, {success:false, message: "images not found"});
    } else {
      const data = docs.map( (p) => {
        p.favourites = p.favourites.length;
        return p;
      });
      if( cb) cb( null, {success:true, data});
    }
  });
};

PImageSchema.statics.getAll = function getAll( req_body, cb){
  const {offset, limit} = req_body;
  this.find( {}, [], {
    skip: offset,
    limit,
    sort: {created:1}
  })
  .exec( function( err, docs){
    if( err || !docs || docs.length === 0){
      console.error( "PImage find failed:", err);
      if( cb) cb( err, {success:false, message: "images not found"});
    } else {
      const data = docs.map( (p) => {
        p.favourites = p.favourites.length;
        return p;
      });
      if( cb) cb( null, {success:true, data});
    }
  });
};

module.exports = mongoose.model('PImage', PImageSchema);
