var mongoose = require('mongoose');
var OrdersSchema = new mongoose.Schema({
  user_id:String,
  product_id:String,
  quantity:Number
});
mongoose.model('Order',OrdersSchema);
