var express = require('express');
var mongodb = require('mongodb');

var router = express.Router();
var mongourl = 'mongodb://localhost:27017/SmashCensus';
var smashurl = "https://smashcensus.localtunnel.me";
var profilesRoute = '/profiles';
var addProfileRoute = '/addprofile';
var delProfileRoute = '/delprofile';
var db;

mongodb.MongoClient.connect(mongourl, function(err, database) {
	if (err) {
		console.log(err);
	} else {
		db = database;
	}
});

/* view profiles page */
router.get(profilesRoute, function(req, res, next) {
	// Get all profiles
	db.collection('profiles').find({}).toArray(function(err, result) {
		if (err) {
			res.send(err);
		} else if (result.length) {
			res.json(result);
		} else {
			res.send('No profiles found!');
		}
	});
});

router.post('/postprofile', function(req, res) {
	// Get the profile passed from the form
	var p = {profile: req.body.profile, firstName: req.body.firstName,
		surname: req.body.surname, tag: req.body.tag, region: req.body.region,
		main: req.body.main, secondary: req.body.secondary};

	// Insert the profile into the database
	db.collection('profiles').insert([p], function (err, result) {
		if (err) {
			console.log(err);
		} else {
			// Redirect to the updated profile list
			res.redirect("profiles");
		}
	});
});

router.post('/deleteprofile', function(req, res) {
	var query = { tag: req.body.tag };

	// Delete profile that matches tag
	db.collection('profiles').deleteOne(query, function(err, obj) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('profiles');
		}
	});
});

module.exports = router;
