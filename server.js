var express = require("express");
var app = express();

app.get("/", function(request, response) {
	response.send("Hello hello");
});

var server = app.listen(3000, function() {
	console.log("Server is listening on port 3000");
});