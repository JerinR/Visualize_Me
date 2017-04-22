var express = require('express');
var router = express.Router();

router.get('/algorithm/:name', function (req, res, next) {
  var name = req.params.name || 'None :(';
  res.send('This is ' + name + ' algorithm page');
});

module.exports = router;
