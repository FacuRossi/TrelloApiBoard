var mongoose = require('mongoose')

var CardSchema = new mongoose.Schema({
  name: String,
  description: String,
  listId: String
})

mongoose.model('Card', CardSchema)

module.exports = mongoose.model('Card')