var data = require("../data.json");

exports.view = function(req, res){
  res.render('homepage', data);
};

exports.viewB = function(req, res){
  res.render('homepage', data);
};