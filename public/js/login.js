

$('.loginButton').click(function (req, res) {
	var homepage = require('./routes/homepage');
	app.get('/homepage', function(req, res){
	res.render('homepage');
});
});


$('.Create').click(function (req, res) {
	var planadd = require('./routes/planadd');
	app.get('/planadd', function(req, res){
	res.render('/planadd');
});
});
