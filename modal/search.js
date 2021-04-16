var mongoose = require('mongoose')
var Schema = mongoose.Schema

const searchSchema = new Schema({
	id:Number,
    name: String,
    city:String,
   
})

module.exports = mongoose.model('search', searchSchema)