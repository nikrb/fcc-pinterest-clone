const express = require('express');
const bodyParser = require('body-parser');
const passport = require( 'passport');
if( process.env.PORT !== "production"){
  require( 'dotenv').config();
}
require( './models').connect( process.env.dbUri);
const app = express();

const PORT = process.env.PORT || 5000;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use( '/', express.static('client/build'));

  app.get('/', function (req, res) {
    res.sendFile( 'client/build/index.html');
  });
}

app.use( bodyParser.json());
app.use( passport.initialize());

const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const apoRoutes = require( './routes/apo');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/apo', apoRoutes);

app.listen( PORT, () => {
  console.log(`Find the server at port [${PORT}]`); // eslint-disable-line no-console
});
