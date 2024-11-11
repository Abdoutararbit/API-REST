//imports
var express = require("express");

//instansiate server
var server = express("");

//configure routes
server.get("/", function (req, res) {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>bonjour abdou sur mon super serveur  </h1>");
});
//launch server
server.listen(8080, function () {
  console.log("server en ecoute:");
});
