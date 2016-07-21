var express = require('express');
var router = express.Router();
var crewtype = require('../models/crewType.js');
require('mongoose-query-paginate');

var crewType = {
  getCrewType: function (res, req) {
    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'name'
    };

    var query = crewtype.find({}).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });
  },
  createCrewType: function (req, res) {


  }
}

module.exports = crewType;
