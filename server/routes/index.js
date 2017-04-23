var express = require('express');
var router = express.Router();

router.get(['/home', '/'], function (req, res, next) {
  res.render('index.html');
  // res.send('this is home page');
});

module.exports = router;
