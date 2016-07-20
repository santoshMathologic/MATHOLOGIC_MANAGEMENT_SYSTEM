var express = require('express');
var router = express.Router();
var trainStation = require('../models/trainStation.js');
require('mongoose-query-paginate');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/v1/trainStations', function (req, res) {


  var options = {
    perPage: parseInt(req.query.limit) || 10,
    page: parseInt(req.query.page) || 1,
    sortBy: req.query.sortBy || 'trainNo'
  };

  var query = trainStation.find({}).sort(options.sortBy);
  query.paginate(options, function (err, result) {
    res.json(result);
  });


});

module.exports = router;
