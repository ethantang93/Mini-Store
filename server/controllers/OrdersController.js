var mongoose = require('mongoose');
var order = mongoose.model('Order');
var product = mongoose.model('Product')

function OrderController(){
  this.index = function(req,res){
    console.log('index route');
    order.find({},function(err,results){
      if(err){
        console.log(err);
      }else{
        res.json(results);
      }
    })
  };
  this.create = function(req,res){
    console.log("from serverside order controller", req.body);
    order.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating order object",result);
        console.log("!!!!",req.body.product_id)
        var item = product.findOne({_id:req.body.product_id},function(err2,result2){
          if(err2){
            console.log("not found",err2)
          }else{
            result2.quantity -= req.body.quantity;
            result2.save(function(err3,result3){
              if(err3){
                console.log(err3)
              }else{
                console.log(result3)
              }
            })
          }
        })

      };
    })
  };
  this.delete = function(req,res){
    console.log("id",req.params.id);
    order.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete success")
        res.json(result);
      }
    })
  }
}
module.exports = new OrderController();
