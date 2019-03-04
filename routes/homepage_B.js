var data = require("../data.json");

exports.view = function(req, res){
  res.render('homepage_B', data);
};