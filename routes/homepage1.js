var data = require("../data.json");
exports.view = function(req, res){
  res.render('homepage1', data);
};