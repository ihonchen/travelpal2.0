
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');
var login = require('./routes/login');
var homepage = require('./routes/homepage');
var planadd = require('./routes/planadd');
var planz = require('./routes/planz');
var planz2 = require('./routes/planz2');
var homepage1 = require('./routes/homepage1');
var homepage2 = require('./routes/homepage2');
//var homepage = require('./routes/homepage(C)');
//var planadd = require('./routes/planadd');
//var login = require('./routes/login')
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(express.bodyParser());
app.post('/planz2', function(request, response) {
  var fs = require('fs'); 			// Node module to write to file

  var fileName = './data.json';  		// Path to your json on disk
  var data = require(fileName); 		// Read contents of your old json

  // Assume that data.events is an array containing your previous events
  // new Event is the current event entered by the user in the form.
	// Push the new event to the array.

  newIt = {"title": request.body.itineraries.title, "numdays" : request.body.itineraries.numdays};
  data.itineraries.push(newIt);

  fs.writeFileSync(fileName, JSON.stringify(data)); // Update the json file on disk
  // Done !
});

app.get('/planz', planz.view);

app.get('/planz2', planz2.view);

app.get('/', function(req, res){
	res.render('login');
});
app.get('/homepage', homepage.view);

app.get('/planadd', function(req, res){
	res.render('planadd')
});

app.get('/homepage1', homepage1.view);
app.get('/homepage2', homepage2.view);
//app.get('/', planadd.view);

// Example route
// app.get('/users', user.list);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
