
module.exports = (req, res, next) => {
  if( req.isAuthenticated()){
    console.log( "user is authed");
  } else {
    console.log( "user is not authed");
    return res.status( 401).send( "Not authenticated");
  }
  // if (!req.isAuthenticated()) return res.status(401).send('Not authenticated');
  return next();
};
