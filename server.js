var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var bcrypt = require('bcrypt');
var db = require('./db.js');
var middleware = require('./middleware.js')(db);
var userRoutes = require('./routes/user.js');

var app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// Wire up our routes
userRoutes(app);
app.get('/', function (req, res) {
  res.send('Hello World!');
});



// Start up the server
var PORT = process.env.PORT || 3000;
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});