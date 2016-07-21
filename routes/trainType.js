var express = require('express');
var router = express.Router();
var trainType = require('../models/trainType.js');
require('mongoose-query-paginate');


var trainType = {
  getTrainType: function (req, res) {
    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'name'
    };

    var query = trainType.find({}).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });
  },

  createTrainType:function(req,res){


  }
}


module.exports = trainType;
