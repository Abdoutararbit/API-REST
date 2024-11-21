//imports
var express = require("express");
var bodyParser = require("body-parser");
var apiRouter = require("./apiRouter").router;
//instansiate server
var server = express("");
//body parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json);

//configure routes
server.get("/", function (req, res) {
  res.setHeader("content-type", "text/html");
  res.status(200).send("<h1>bonjour abdou sur mon super serveur  </h1>");
});
server.use("/api/", apiRouter);
//launch server
server.listen(8080, function () {
  console.log("server en ecoute:");
});
