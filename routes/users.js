var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
require('mongoose-query-paginate');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/v1/admin/users', function (req, res) {

  var options = {
    perPage: 10,
    delta: 3,
    page: req.query.p
  };

  var query = User.find({}).sort('userName');
  query.paginate(options, function (err, result) {
    res.json(result);
  });
});

module.exports = router;
