var express = require("express");
var bodyParser = require("body-parser");
var friends = require("../data/friends.js");
var apiRoute = express.Router();

apiRoute.get("/api/friends", function(req, res) {
	res.json(friends);
});

apiRoute.post("/api/friends", function(req, res) {
	var newFriend = req.body;
	var myFriend = findFriend(newFriend, friends);
	friends.push(newFriend);
	res.json(myFriend);
});

function calculateNewFriendScore(newFriend) {
	var scoreTotal = 0;
	for (var i = 0; i < newFriend.scores.length; i++) {
		scoreTotal += parseInt(newFriend.scores[i]);
	}
	return newFriendScoreTotal;
}

function calculateDifference(scoreTotal) {
	
	var differenceArr = [];
	
	for (var i = 0; i < friends.length; i++) {
		var surveyTotal = 0;
		var totalDifference = 0;
		for (var j = 0; j < friends[i].scores.length; j++) {
			surveyTotal += parseInt(friends[i].scores[j]);
		}
		totalDifference = Math.abs(surveyTotal - scoreTotal);
		differenceArr.push(totalDifference);
	}
	return differenceArr;
}

function findFriend(newFriend, array) {

	var scoreTotal = calculateNewFriendScore(newFriend);
	var differenceArr = calculateDifference(newFriendScoreTotal);
	console.log(differenceArr);
	var min = Math.min.apply(Math, differenceArr);
	var index = differenceArr.indexOf(min);
	var result = array[index];
	return result;
}

module.exports = apiRoute;