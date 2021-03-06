var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const addFile = require('./routes/add');
const subFile = require('./routes/sub');
const divFile = require('./routes/div');
const homePath = require('./routes/home');
const updateName = require('./routes/updateName');
const addressUpdate =require('./routes/adressUpdate');
const deleteupdate = require('./routes/delete');
const addFile1 = require('./routes/add1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/add',addFile);
app.get('/sub/:a/:b',subFile);
app.get('/div',divFile);
app.post('/home',homePath);
app.put('/updatedName',updateName);
app.post('/newAddress',addressUpdate);
app.delete('/deletePara',deleteupdate)
app.get('/add1',addFile1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
