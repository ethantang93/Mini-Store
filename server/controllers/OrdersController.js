var mongoose = require('mongoose');
var order = mongoose.model('Order');
var product = mongoose.model('Product')

function OrderController(){
  this.index = function(req,res){
    order.find({})
    .populate('_buyer')
    .populate('_bought')
    .exec(function(err,result){
      if(err){
        res.json(err);
      }else{
        res.json(result);
      }
    })
  };
  this.create = function(req,res){
    console.log("from serverside order controller", req.body);
    order.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating order object");
        var item = product.findOne({_id:req.body._bought},function(err2,result2){
          if(err2){
            console.log("not found",err2)
          }else{
            result2.quantity -= req.body.quantity;
            result2.save(function(err3,result3){
              if(err3){
                console.log(err3)
                res.json(result3)
              }else{
                console.log(result3)
                res.json(result3)
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
