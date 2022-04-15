// Instantiates the following packages
var express = require('express');
var bodyParser = require('body-parser');
var htmlspecialchars = require('locutus/php/strings/htmlspecialchars');

// Defining application to be express
var app = express ();

// Ensures form data gets parsed to JSON object properly
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Includes the module mongodb
var MongoClient = require('mongodb').MongoClient
// Specifies the host name(address) / port number & we want to connect to
var url = "mongodb://localhost:27017/";

// Tells the client which database it should connect to
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  dbo = db.db('NextPhasePM');
});

// When localhost:8080 is visited, index.html will be rendered and shown;
// CSS & JS files will be sent to the browser as well
app.use(express.static(__dirname));

// Handles POST request; ultimately stores parsed data in collection inside database
//req.body = all parsed info submitted by form
app.post('/prototype1update/', function(req, res) {
  var policy = req.body.passpolicy;
  var registeredPass = htmlspecialchars(req.body.registeredpass);
  var randompass = req.body.randompass;
  var decidedAgainstRndm = req.body.decidedAgainstRndm;
  // Defines a JS object that has all properties recieved from form data
  var newCredential= {policy: policy, registeredPass: registeredPass, randompass: randompass, decidedAgainstRndm: decidedAgainstRndm};
  dbo.collection("prototype1").insertOne(newCredential, function(err, result) {
    if (err) throw err;
    console.log("1 set of prototype1 credentials inserted");
    res.redirect('/prototype1.html');
  });
});

app.post('/prototype2update/', function(req, res) {
  var policy = req.body.passpolicy;
  var registeredPass = htmlspecialchars(req.body.registeredpass);
  var randompass = req.body.randompass;
  var decidedAgainstRndm = req.body.decidedAgainstRndm;
  var newCredential= {policy: policy, registeredPass: registeredPass, randompass: randompass, decidedAgainstRndm: decidedAgainstRndm};
  dbo.collection("prototype2").insertOne(newCredential, function(err, result) {
    if (err) throw err;
    console.log("1 set of prototype2 credentials inserted");
    res.redirect('/prototype2.html');
  });
});

app.post('/safari-chromeupdate/', function(req, res) {
  var policy = req.body.passpolicy;
  var registeredPass = htmlspecialchars(req.body.registeredpass);
  var randompass = req.body.randompass;
  var decidedAgainstRndm = req.body.decidedAgainstRndm;
  var newCredential= {policy: policy, registeredPass: registeredPass, randompass: randompass, decidedAgainstRndm: decidedAgainstRndm};
  dbo.collection("safari-chrome").insertOne(newCredential, function(err, result) {
    if (err) throw err;
    console.log("1 set of safari-chrome credentials inserted");
    res.redirect('/safari.html');
  });
});

// Constantly listening on the port 3005
app.listen(3005);
