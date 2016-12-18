var mongoose = require('mongoose');
var product = mongoose.model('Product');

function ProductController(){
  this.index = function(req,res){
    console.log('index route');
    product.find({},function(err,results){
      if(err){
        console.log(err);
      }else{
        res.json(results);
      }
    })
  };
  this.create = function(req,res){
    console.log("from serverside product controller", req.body);
    product.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating product object",result);
        res.json(result);
      };
    })
  };
  this.delete = function(req,res){
    console.log("id",req.params.id);
    product.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete success")
        res.json(result);
      }
    })
  }
}
module.exports = new ProductController();
