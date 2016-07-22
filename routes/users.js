var express = require('express');
var router = express.Router();
var User = require('../models/user.js');
require('mongoose-query-paginate');


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

  createUser:function(req,res){


  },

  searchByUser:function(req,res){

    console.log("DASDAS");
    if (req.params.searchQuery) {
      User.find({ "userName": { '$regex': req.params.searchQuery, $options: 'i' } }).then(function (result) {
        res.json(result);
      });
    }



  }


}


module.exports = user;
