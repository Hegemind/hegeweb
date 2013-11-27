exports.sections = require('./sections');

exports.start = function(req, res){
	res.render('start');
};

exports.login = function(req, res){
	res.render('login');
};

exports.logout = function(req, res){
	res.render('logout');
};

exports.error = function(req, res){
	res.render('error');
};
