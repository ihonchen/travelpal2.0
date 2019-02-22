$(document).ready(function () {
});



function addComment() { 
	var commentAdded = document.getElementById('commentAdd').value;
	$('.exampleComments').append('<a class="dropdown-item" href="#">Henry: '+commentAdded+'</a>');
};

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

$('.commentButton').click(function() {
	addComment();
});

$('#deleteButton').click(function() {
	window.location.href = 'homepage1';
});

