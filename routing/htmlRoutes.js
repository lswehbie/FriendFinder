var express = require("express");
var path = require("path");
var htmlRoute = express.Router();

htmlRoute.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

htmlRoute.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlRoute;