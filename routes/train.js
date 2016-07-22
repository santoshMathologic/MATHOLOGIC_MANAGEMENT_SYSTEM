var express = require('express');
var router = express.Router();
var trainModel = require('../models/trainList.js');
require('mongoose-query-paginate');

var train = {
  getTrain: function (req, res) {
    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'trainNo'
    };

    var query = trainModel.find({}).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });
  },
  createTrain:function(req,res){


  }
}

module.exports = train;
