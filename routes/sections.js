exports.home = function(req, res){
// 	var username = req.session.user_id;
  var username = "dummy user"
	res.render('sections/home', {
		username: username,
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "img/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "img/diablo3-character-profile.jpg"
				
			},
      {
        name: "Campaigns",
        link: "/campaigns",
        image: "img/esteria.jpg"
      },
      {
        name: "D&D Charsheet",
        link: "/dndcharsheet",
        image: "img/logo-d&d.jpg"
      }
		]
	});
};

exports.profile = function(req, res){
// 	var username = req.session.user_id;
  var username = "dummy user"
	res.render('sections/profile', {
		username: username,
		section : [
			{
				name: "Profile",
				link: "/profile",
				image: "img/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "img/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "img/esteria.jpg"
			},
      {
        name: "D&D Charsheet",
        link: "/dndcharsheet",
        image: "img/logo-d&d.jpg"
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
				image: "img/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "img/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "img/esteria.jpg"
			},
      {
        name: "D&D Charsheet",
        link: "/dndcharsheet",
        image: "img/logo-d&d.jpg"
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
				image: "img/final-dice1.png"
			},
			{
				name: "Charsheets",
				link: "/charsheets",
				image: "img/diablo3-character-profile.jpg"
				
			},
			{
				name: "Campaigns",
				link: "/campaigns",
				image: "img/esteria.jpg"
			},
      {
        name: "D&D Charsheet",
        link: "/dndcharsheet",
        image: "img/logo-d&d.jpg"
      }
		]
	});
};

exports.users = function(req, res){
	res.render('sections/users');
};