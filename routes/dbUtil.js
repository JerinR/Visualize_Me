var express = require('express');
var router = express.Router();

var assert = require('assert');

var mongoClient = require('mongodb').MongoClient;
var dbUrl = require('../config/app.config').mongodb.url;

var COLLECTION_NAME = 'collection_basic';

var util = {
  insertOne: function (db, collection, data) {
    return db.collection(collection).insertOne(data);
  },

  getAll: function (db, collection) {
    var cursor = db.collection(collection).find();
    return cursor.toArray();
  }
};

router.get('/algorithm/:name', function (req, res, next) {
  var name = req.params.name || 'None :(';
  res.send('This is ' + name + ' algorithm page');
});

router.get('/getAll', function (req, res, next) {
  var collection = COLLECTION_NAME;
  mongoClient.connect(dbUrl, function (err, db) {
    assert.equal(err, null);

    var promise = util.getAll(db, collection);
    promise.then(function (docs) {
      console.log(docs);
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(docs, null, 3)); // pretty json response TODO
    }).catch(function (err) {
      console.log(err);
    });

    db.close();
  });
});

router.post('insert', function (req, res, next) {
  // TODO insert function
  res.send('TODO insert function in api');
});


module.exports = router;
