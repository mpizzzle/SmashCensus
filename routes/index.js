var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

var href = "https://smashcensus.localtunnel.me";
var profilesRoute = '/profiles';
var addProfileRoute = '/addprofile';
var deleteProfileRoute = '/users';

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'SmashCensus', link: href,
		profiles: profilesRoute, add: addProfileRoute, del: deleteProfileRoute });
});

router.get(profilesRoute, function(req, res, next) {
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/SmashCensus';

	MongoClient.connect(url, function(err, db) {
		if (err) {
			console.log(err);
		}
		else {
			console.log("Database connection established!");

			var collection = db.collection('profiles');
			collection.find({}).toArray(function(err, result) {
				if (err) {
					res.send(err);
				}
				else if (result.length) {
					res.render('profiles', {
					"profiles" : result
					});
				}
				else {
					res.send('No profiles found!');
				}

				db.close();
			});
		}
	});
});

router.get(addProfileRoute, function(req, res) {
	res.render('addprofile', {title : 'Add new profile'});
});

router.post('/postprofile', function(req, res){
	 
	// Get a Mongo client to work with the Mongo server
	var MongoClient = mongodb.MongoClient;
	
	// Define where the MongoDB server is
	var url = 'mongodb://localhost:27017/SmashCensus';
	
	// Connect to the server
	MongoClient.connect(url, function(err, db){
		if (err) {
			console.log('Unable to connect to the Server:', err);
		} else {
			console.log('Connected to Server');

			// Get the profile collection
			var collection = db.collection('profiles');

			// Get the profile passed from the form
			var profile1 = {profile: req.body.profile, firstName: req.body.firstName,
				surname: req.body.surname, tag: req.body.tag, region: req.body.region,
				main: req.body.main, secondary: req.body.secondary};

			// Insert the profile into the database
			collection.insert([profile1], function (err, result){
			if (err) {
				console.log(err);
			} else {

				// Redirect to the updated student list
				res.redirect("profiles");
			}

				// Close the database
				db.close();
			});
		}
	});
});

module.exports = router;
