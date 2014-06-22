
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Web requests
app.get('/', routes.sections.home);
app.get('/profile', routes.sections.profile);
app.get('/charsheets', routes.sections.charsheets);
app.get('/campaigns', routes.sections.campaigns);

app.get('/start', routes.start);
app.get('/login', routes.login);
app.get('/logout', routes.logout);
app.get('/error', routes.error);
app.get('/users', routes.sections.users);

// app.get('/', routes.index);
// app.get('/charsheets', routes.index);
app.get('/dndcharsheet', routes.indexHTML);
// app.get('/login', routes.login);
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
 