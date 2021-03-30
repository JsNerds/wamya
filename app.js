var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import mongoDB
var mongoose = require('mongoose');
var config = require('./database/mongodb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var deliveryRouter = require('./routes/delivery');
var vehiculeRouter = require('./routes/vehicule');
var packageRouter = require('./routes/Package');

//Customer & Entreprise Module's routers
var customerRouter = require('./routes/customers');
var entrepriseRouter = require('./routes/entreprise');
var paymentRouter = require('./routes/payment');



var app = express();
const bodyParser = require('body-parser');

// mongo config
mongoose
  .connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo'))
  .catch((err) => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/delivery', deliveryRouter);
app.use('/vehicule', vehiculeRouter);
app.use('/Package', packageRouter);


//Customer & Entreprise Module's middlewares
app.use('/customers', customerRouter);
app.use('/entreprises', customerRouter);
app.use('/payments', customerRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
