var mongoose = require('mongoose');
var traintypeSchema = new mongoose.Schema({
    name: String,
})
module.exports = mongoose.model('traintype',traintypeSchema);