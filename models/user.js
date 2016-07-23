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
    subscribeStations:[String],
    userActive:{type:Boolean,default:false},
    roleCode: {type:String, ref:'role', default:'Planner'},
    markDelete:{type:Boolean,default:false},
    createdTime: {type:Date , default:Date.now}
});


module.exports = mongoose.model('user', userSchema);