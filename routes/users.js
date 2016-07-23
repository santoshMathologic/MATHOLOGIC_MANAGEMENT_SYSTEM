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

    var userObject = new User({
      userName: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      roleCode: req.body.role.roleCode,
      email: req.body.email,
      address: req.body.address,
      userActive: req.body.isActive,
      mobileNo: req.body.mobileNo,
      city: "Bengauru",
      subscribeStations:["SBC","MAS","CSTM","KGP","BLGR"]
    })

    userObject.save(function (err) {
      if (err) return err;
      res.status(201);
      return res.json({
        "status": "200",
        "success": true,
        "message": "User saved Successfully",
      });
    });


  },
  deleteUser: function (req, res) {
    var id = req.params.id;
    mitaccountModel.findByIdAndUpdate(id, { 'markDelete': true }, function (result) {
      res.status(201);
      res.json({
        "status": 200,
        "message": "delete Successfully"
      })
    }, function (error) {
      console.log("error" + error);
    })
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
