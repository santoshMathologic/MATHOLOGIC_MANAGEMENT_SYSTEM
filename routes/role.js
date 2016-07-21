
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var roleModel = require('../models/role.js');
var q = require('q');
require('mongoose-query-paginate');


router.get('/api/v1/roles', function (req, res) {
  var options = {
    perPage: parseInt(req.query.limit) || 10,
    page: parseInt(req.query.page) || 1,
    sortBy: req.query.sortBy || 'roleCode'
  };

  var query = roleModel.find({}).sort(options.sortBy);
  query.paginate(options, function (err, result) {
    res.json(result);
  });


});


module.exports = router;