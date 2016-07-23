var express = require('express');
var router = express.Router();
var q = require('q');
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
  createTrain: function (req, res) {


  },
  /*getByTrainNo: function (req, res) {

    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      term: req.query.term || '',
      sortBy: req.query.sortBy || 'trainNo'

    }
    
      var query = trainModel.find({ $where: options.term }).sort(options.sortBy);
      query.paginate(options, function (error, result) {
        if (error) {
          throw error;
        }
        res.json(result);
      });

    

  } */

  getByTrainNo: function (req, res) {
    var deferred = q.defer();

    var options = {
      perPage: parseInt(req.query.limit) || 100,
      page: parseInt(req.query.page) || 1,
      term: req.params.trainNo || '',
      sortBy: req.query.sortBy || 'trainNo'

    }
    var query = trainModel.find({ $where: "/^"+options.term +".*/"}).sort(options.sortBy);
    query.paginate(options, function (error, result) {
      if (error) {
        throw error;
      }
      deferred.resolve(res.json(result));
    });
    return deferred.promise;
    
  },

  getWhereTrainNo : function(req,res){

    var options = {
      perPage: parseInt(req.query.limit) || 10,
      page: parseInt(req.query.page) || 1,
      term: req.params.trainNo || '',
      sortBy: req.query.sortBy || 'trainNo'

    }

    
    var deferred = q.defer();
    var query = trainModel.find({ $where: "/^"+options.term +".*/"}).sort(options.sortBy);
    query.paginate(options, function (error, result) {
      if (error) {
        throw error;
      }
      deferred.resolve(res.json(result));
    });
    return deferred.promise; 
  }

}

module.exports = train;
