var express = require('express');
var router = express.Router();
var trainStation = require('../models/trainStation.js');
require('mongoose-query-paginate');



var trainstation = {
  getTrainStation: function (req, res) {

    var trainNo = parseInt(req.query.trainNo);
    var startDay = req.query.startDay;
    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'trainNo'
    };

    var query = trainStation.find({ 'trainNo': trainNo }).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });
  },

  createTrainStation:function(req,res){


  }
}


module.exports = trainstation;
