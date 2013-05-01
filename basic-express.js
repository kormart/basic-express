/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('aW23t90pd'));
  app.use(express.session({
	  secret: 'aW23t90pd',
	  maxAge: 3600000
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

//app.get('/', routes.index);
require('./routes/index')(app);
require('./routes/users')(app);
require('./routes/session')(app);

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode",3000,
     app.settings.env);
});