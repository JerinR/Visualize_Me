var express = require('express');
var router = express.Router();

var mongoClient = require('mongodb').MongoClient;
var dbUrl = require('../config/app.config').mongodb.url;

var util = {
  insertOne: function (db, collection, callback) {
    db.collection(collection).insertOne({

    }, function (err, result) {
      assert(err, null);
      console.log('Inserted a document into ' + collection + ' collection');
      callback();
    });
  },

  getAll: function (db, collection, callback) {
    var cursor = db.collection(collection).find();

  }
};

module.exports = router;
