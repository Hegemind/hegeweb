exports.sections = require('./sections');

exports.start = function(req, res){
	res.render('start');
};

exports.logout = function(req, res){
	res.render('logout');
};

exports.error = function(req, res){
	res.render('error');
};

exports.index = function(req, res){
  res.render('index.html', { title: 'Express' });
};

exports.login = function(req, res){
  res.render('login', { title: 'Express' });
};