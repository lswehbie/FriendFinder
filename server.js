
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var htmlRoute = require("./app/routing/htmlRoutes.js");
app.use("/", htmlRoute);

var apiRoute = require("./app/routing/apiRoutes.js");
app.use("/", apiRoute);

app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});