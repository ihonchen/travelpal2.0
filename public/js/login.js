$(document).ready(function () {
	initializePage();
});

function addEvent() {
	var eventAdded = document.getElementById('eventA').value;
	var timeAdded = document.getElementById('timeA').value;
	var placeAdded = document.getElementById('placeA').value;
	var detailAdded = document.getElementById('detailA').value;
	$('.toAdd').append('<span><button class="btn btn-secondary dropdown-toggle" type="button" id="newEvent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + eventAdded + ' @ ' + timeAdded + '</button><div class="dropdown-menu container" aria-labelledby="dropdownMenuButton2"> <a class="dropdown-item" href="#">' + placeAdded + '<button type="button" class="btn btn-light float-right edit" data-toggle="modal" data-target="#myModal">Edit</button></a><a class="dropdown-item" href="#">' + detailAdded + '</a><hr><form id="commentForm"><input class="form-control form-control-sm" type="textarea" id="commentAdd" placeholder="add comment" name="commentPlz"><button type="button" class="btn btn-primary commentButton">Comment</button></form></span>'
          
		);
}

function initializePage() {
	$('.likeBtn').click(function() {
ga('create', 'UA-135647985-1', 'auto');
ga("send", "event", 'like', 'click') });
	
};

function addComment() { 
	var commentAdded = document.getElementById('commentAdd').value;
	$('.exampleComments').append('<a class="dropdown-item" href="#">Henry: '+commentAdded+'</a>');
	event.preventDefault();
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

$('.eventButton').click(function() {
	addEvent();
	$('#myModal').modal('hide');
});

$('.commentButton').click(function() {
	addComment();
});

$('#deleteButton').click(function() {
	window.location.href = 'homepage2';
});
