var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
    userName: String,
    firstName:String,
    lastName : String,
    password: String,
    email: String,
    city: String,
    address:String,
    mobileNo:Number,
    userActive:{type:Boolean,default:false},
    roleCode: {type:String, ref:'role', default:'Planner'},
    markDelete:{type:Boolean,default:false},
    createdTime: {type:Date , default:Date.now}
});



/// find the Existing users using Query
userSchema.methods.findUsers = function(req,res){ 
    userSchema.find({}, function (err, post) {
      if (err) console.log(err);
      res.json(post);

    });

}



module.exports = mongoose.model('user', userSchema);