var createError = require ('http-errors');
var express = require ('express');
var path = require ('path');
var cookieParser = require ('cookie-parser');
var logger = require ('morgan');
const session = require('express-session');
var nodemailer = require('nodemailer');
const stripe = require("stripe")(process.env.STRIPE_SECRET_API_KEY);

var cors = require('cors');
var app = express();
var router = express.Router();

var indexRouter = require ('./routes/signup');
var loginRouter = require ('./routes/login');
var cityhotelsRouter = require ('./routes/cityhotels');
var {mysqlRouter} = require('./config');
var {creds} = require('./config');
var usersRouter = require('./routes/users.js');
var hoteldetailsRouter = require('./routes/hoteldetails');
var adminRouter = require('./routes/admin');
var adminhotelRouter = require('./routes/adminhotel');
var bookingRouter = require('./routes/bookings');
var tourRouter = require('./routes/citytours');
var adminTourRouter = require('./routes/admintour');
var mailRouter =require('./routes/mail');

global.db=mysqlRouter;

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }

}

console.log(transport.auth);

global.transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

var app = express ();

// view engine setup
app.set ('views', path.join (__dirname, 'views'));
app.set ('view engine', 'ejs');

app.use(session({
  key: "hotel",
  secret: "hotelsecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
     expires: 600000
  }
}))



app.use (cors ());
app.use (logger ('dev'));
app.use (express.json ());
app.use (express.urlencoded ({extended: false}));
app.use (cookieParser ());
app.use (express.static (path.join (__dirname, 'public')));

app.use ('/users/register', indexRouter);
app.use ('/users/login', loginRouter);
app.use ('/cityhotels',cityhotelsRouter);
app.use ('/users',usersRouter);
app.use ('/hoteldetails',hoteldetailsRouter);
app.use ('/admin',adminRouter);
app.use ('/adminhotel',adminhotelRouter);
app.use ('/bookings',bookingRouter);
app.use ('/citytours',tourRouter);
app.use ('/admintour',adminTourRouter);
app.use ('/mail',mailRouter);
app.use(session({
  key: "hotel",
  secret: "hotelsecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 6*60*1000,
      

  }
}))
app.use(express.static('public'));
app.use("*",(req,res,next) => {
    console.log("Middleware is called");
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Access-Control-Allow-Headers,Authorisation,X-Requested-With')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader('Access-Control-Allow-Credentials',true)

    next();
})

// catch 404 and forward to error handler
app.use (function (req, res, next) {
  next (createError (404));
});

// error handler
app.use (function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get ('env') === 'development' ? err : {};

  // render the error page
  res.status (err.status || 500);
  res.render ('error');
});

module.exports = app;
