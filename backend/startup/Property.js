var mongoose = require('mongoose');

var PropertySchema = new mongoose.Schema({  
  key: String,
  value: String,
})

mongoose.model('Property', PropertySchema)

module.exports = mongoose.model('Property')