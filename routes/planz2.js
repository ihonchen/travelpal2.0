var data = require("../data.json");

exports.view = function(req, res){
  res.render('planz2', data);
};