var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var assert = require('assert');

// mongodb setup local
var mongoClient = require('mongodb').MongoClient;
var dbUrl = require('./server/config/app.config').mongodb.url;
mongoClient.connect(dbUrl, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});

var index = require('./server/routes/index');
var algo = require('./server/routes/algo');
var dbUtil = require('./server/routes/dbUtil');

// var port = 3443;
var port = process.env.PORT || 3443;

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

//View Engine
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

// Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));
// app.use(express.static(path.join(__dirname, 'client/src'))); // fix for latest angular
// app.use(express.static(path.join(__dirname, 'public'))); // serve images currently

// Body Parser MW(middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', algo);
app.use('/dbUtil', dbUtil);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
