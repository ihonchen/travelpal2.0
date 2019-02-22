var commentString = $('#commentForm').serialize();
var text = $('#myComment').find('input[name="myComment"]').val();
var commentAdd = $('#myModal #commentAdd').val()


function addComment() { 
	console.log(commentAdd);
	$('.exampleComments').append('<a class="dropdown-item" href="#">'+ commentAdd +'</a>');
}

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
})

