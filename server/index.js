if( process.env.PORT !== "production"){
  require( 'dotenv').config();
}

process.env.PORT = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const session = require( 'express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require( 'mongoose');
const passport = require( 'passport');

require( './models').connect( process.env.dbUri);

const app = express();

app.use( bodyParser.json());
app.use( bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: "mysecretsessionpassword",
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(function(req, res, next){
  console.log( `request: protocol [${req.protocol}] host [${req.hostname}]
    url [${req.url}]`);
  next();
});

app.use( passport.initialize());
app.use( passport.session());

require( './passport/twitter-login')();

// let's sort basic auth out first
// const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/api', authCheckMiddleware);

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const apoRoutes = require( './routes/apo');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/apo', apoRoutes);

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use( '/', express.static( 'client/build'));

  app.get('/*', function (req, res) {
    res.sendFile( 'index.html');
  });
}

app.listen( process.env.PORT, () => {
  console.log(`Find the server at port [${process.env.PORT}]`); // eslint-disable-line no-console
});
