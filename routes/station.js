var express = require('express');
var router = express.Router();
var stations = require('../models/stations.js');
require('mongoose-query-paginate');


var station = {

  getStations: function (req, res) {
    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'stationCode'
    };

    var query = stations.find({}).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });


  },

  getStationsByQuery: function (req, res) {
    if (req.params.searchQuery) {
      stations.find({ "code": { '$regex': req.params.searchQuery, $options: 'i' } }).then(function (result) {
        res.json(result);
      });
    }
  },


   createStation:function(req,res){


   },
}



module.exports = station;
