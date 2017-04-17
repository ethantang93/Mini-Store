var mongoose = require('mongoose');
var OrdersSchema = new mongoose.Schema({
  _buyer:{type:mongoose.Schema.ObjectId,ref:'Customer',required:true},
  _bought:{type:mongoose.Schema.ObjectId,ref:'Product',required:true},
  quantity:{type:Number,required:true},
  created_at: { type: Date, default: Date.now() }
});
mongoose.model('Order',OrdersSchema);
