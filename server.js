var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// mongodb setup local
var mongoClient = require('mongodb').MongoClient;
var dbUrl = require('./config/app.config').mongodb.url;
mongoClient.connect(dbUrl, function(err, db) {
  // assert.equal(null, err);
  console.log("Connected successfully to server");
  db.close();
});


var index = require('./routes/index');
var algo = require('./routes/algo');
var dbUtil = require('./routes/dbUtil');

var port = 3443;

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/src'))); // fix for latest angular

// Body Parser MW(middleware)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', algo);
app.use('/dbUtil', dbUtil);

app.listen(port, function(){
    console.log('Server started on port ' + port);
});
