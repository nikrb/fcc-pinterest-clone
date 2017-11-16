
module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log( "@api.checkAuth user not authenticated");
    return res.status(401).send('Not authenticated');
  }
  return next();
};
