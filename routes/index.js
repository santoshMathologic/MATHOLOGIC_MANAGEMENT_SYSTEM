var express = require('express');
var router = express.Router();

var User = require('../models/user.js');



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



/**
 * Routes for Only Users
 * */ 

router.get('/api/v1/admin/users', function (req, res) {
  User.find({}, function (err, post) {
    if (err) console.log(err);
    res.json(post);

  });
});
//----------------------------------------------------------


module.exports = router;
