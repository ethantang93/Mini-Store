var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
  name:String,
  url:String,
  description:String,
  quantity:Number
});
mongoose.model('Product',ProductSchema);
