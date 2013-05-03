var express = require('express');
//  , routes = require('./routes');
//var dbURL = 'mongodb://localhost/database';
//var db = require('mongoose').connect(dbURL);
var app = module.exports = express();
//var User = require('./data/models/user');
var users = require('./data/users');
var users2 = require('./data/users_copy2');
var index = 0;
var length = 10;

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('aW23t90pd'));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes
//app.get('/', routes.index);
//require('./routes/index')(app);
//require('./routes/users')(app);
//require('./routes/session')(app);

app.get('/', function(req, res){
  res.render('index', { title: 'Superbowl'});
});

app.get('/input', function(req, res, next) {
//    dataStore[index] = req.query.name;
    User.create(req.query, function(err) {
      if (err) {
        return next(err);
      }
    });	  
	index++;
    if (index==length) { index=0; }
    res.end('end-of-page');
});

app.get('/data', function(req, res, next){
//  User.count(function(err, count) {
//    if (err) {
//      return next(err);
//    }
//    User.find({})
//      .skip(count - req.query.last)
//      .exec(function(err, users) {
//        if (err) {
//          return next(err);
//        }
//        res.render('data', {title: 'Superbowl Static', users: users});	  
        res.write(JSON.stringify(users) + "\n");
		res.end();	  
//      });
//  });
});

app.get('/data2', function(req, res, next){
    res.write(JSON.stringify(users2) + "\n");
	res.end();	  
});

app.get('/App', function(req, res) {
  res.sendfile(__dirname + '/public/App.html');
});
app.get('/Employees', function(req, res) {
  res.sendfile(__dirname + '/public/Employees.html');
});
app.get('/Services', function(req, res) {
  res.sendfile(__dirname + '/public/Services.html');
});
app.get('/Employees2', function(req, res) {
  res.sendfile(__dirname + '/public/Employees2.html');
});


app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode",3000,
     app.settings.env);
});