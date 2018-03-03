var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/SmashCensus';
var href = "https://smashcensus.localtunnel.me";
var profilesRoute = '/profiles';
var addProfileRoute = '/addprofile';
var delProfileRoute = '/delprofile';
var db;

mongodb.MongoClient.connect(url, function(err, database) {
	if (err) {
		console.log(err);
	} else {
		db = database;
	}
});

/* home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'SmashCensus', link: href,
		profiles: profilesRoute, add: addProfileRoute, del: delProfileRoute });
});

/* view profiles page */
router.get(profilesRoute, function(req, res, next) {
	var collection = db.collection('profiles');
	collection.find({}).toArray(function(err, result) {
		if (err) {
			res.send(err);
		} else if (result.length) {
			res.render('profiles', { "profiles" : result });
		} else {
			res.send('No profiles found!');
		}
	});
});

/* add profile page */
router.get(addProfileRoute, function(req, res) {
	res.render('addprofile', {title: 'Add new profile'});
});

router.post('/postprofile', function(req, res) {
	// Get the profile collection
	var collection = db.collection('profiles');

	// Get the profile passed from the form
	var p = {profile: req.body.profile, firstName: req.body.firstName,
		surname: req.body.surname, tag: req.body.tag, region: req.body.region,
		main: req.body.main, secondary: req.body.secondary};

	// Insert the profile into the database
	collection.insert([p], function (err, result) {
		if (err) {
			console.log(err);
		} else {
			// Redirect to the updated profile list
			res.redirect("profiles");
		}
	});
});

/* delete profile page */
router.get(delProfileRoute, function(req, res) {
	res.render('delprofile', {title: 'Remove profile'});
});

router.post('/deleteprofile', function(req, res) {
	var query = { tag: req.body.tag };

	db.collection('profiles').deleteOne(query, function(err, obj) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('profiles');
		}
	});
});

module.exports = router;
