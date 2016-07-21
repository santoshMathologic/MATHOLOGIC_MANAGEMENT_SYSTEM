var mongoose = require('mongoose');
var stationSchema = new mongoose.Schema({
    code: String,
    name:String,
    head_station_sign_off_duration : {type:Number},
    head_station_sign_on_duration : {type:Number},
    out_station_sign_on_duration : {type:Number},
    out_station_sign_off_duration : {type:Number},
    number_of_beds : {type:Number},

})
module.exports = mongoose.model('station',stationSchema);