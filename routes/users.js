var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
require('mongoose-query-paginate');
var q = require('q');


var user = {
  getUser: function (req, res) {

    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      sortBy: req.query.sortBy || 'userName'
    };

    var query = User.find({}).sort(options.sortBy);
    query.paginate(options, function (err, result) {
      res.json(result);
    });
  },

  createUser: function (req, res) {


  },

  searchUerbyQuery: function (req, res) {
    var deferred = q.defer();
    var options = {
      perPage: parseInt(req.query.limi) || 10,
      page: parseInt(req.query.limi) || 1,
      sortBy: req.query.sortBy || 'userName',

    }
    if (req.params.term != '' && req.params.term != null) {
      User.find({ "firstName": { '$regex': req.params.term, $options: 'i' } }).then(function (result) {
        deferred.resolve(res.json(result));

      });

      /* var query = User.find({ "firstName": { '$regex': req.params.term, $options: 'i' } }).sort(options.sortBy);
       query.paginate(options, function (error, result) {
         if (error) throw error;
 
         deferred.resolve(res.json(result));
 
 
       });
       */

    }
    return deferred.promise;


  }


}


module.exports = user;
