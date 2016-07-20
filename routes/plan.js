
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var planModel = require('../models/plan.js');
var q = require('q');
require('mongoose-query-paginate');


router.get('/api/v1/plans', function (req, res) {
  var options = {
    perPage: parseInt(req.query.limit) || 10,
    page: parseInt(req.query.page) || 1,
    sortBy: req.query.sortBy || 'planName'
  };

  var query = planModel.find({}).sort(options.sortBy);
  query.paginate(options, function (err, result) {
    res.json(result);
  });


});


module.exports = router;