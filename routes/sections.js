exports.home = function(req, res){
	var username = req.session.user_id;
	res.render('sections/home', {
		username: username,
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "images/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "images/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "images/esteria.jpg"
			}
		]
	});
};

exports.profile = function(req, res){
	var username = req.session.user_id;
	res.render('sections/profile', {
		username: username,
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "images/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "images/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "images/esteria.jpg"
			}
		]
	});
};

exports.charsheets = function(req, res){
	res.render('sections/charsheets', {
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "images/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "images/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "images/esteria.jpg"
			}
		]
	});
};

exports.campaigns = function(req, res){
	res.render('sections/campaigns', {
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "images/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "images/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "images/esteria.jpg"
			}
		]
	});
};

exports.users = function(req, res){
	res.render('sections/users');
};