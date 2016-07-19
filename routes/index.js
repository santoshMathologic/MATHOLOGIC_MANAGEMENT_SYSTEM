var express = require('express');
var router = express.Router();

var User = require('../models/user.js');

var newUser = new User();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// user routes

router.get('/api/v1/users',function(req,res){
        res.json(newUser.findUsers());

});

module.exports = router;
