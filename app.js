var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var home = require('./routes/home');
var about = require('./routes/about');
var books = require('./routes/books');
var users = require('./routes/users');
var meditation = require('./routes/meditation');
var theminskys = require('./routes/theminskys');
var resources = require('./routes/resources');
var projects = require('./routes/projects');
var mentorconnect = require('./routes/mentorconnect');

var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', home);
app.use('/about', about);
app.use('/books', books);
app.use('/users', users);
app.use('/meditation', meditation);
app.use('/theminskys', theminskys);
app.use('/resources', resources);
app.use('/projects', projects);
app.use('/projects/mentorconnect', mentorconnect);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

var dburi;

if(process.env.MONGODB_URI){
  dburi = process.env.MONGODB_URI;
}
else{
  dburi = 'mongodb://localhost/mydb'
}

//connect to mongodb
mongodb.MongoClient.connect(dburi, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  app.locals.db = db;
  console.log("Database connection ready");
  // Initialize the app.
  /*var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });*/
});
module.exports = app;

