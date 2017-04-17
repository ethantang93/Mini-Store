var mongoose = require('mongoose');
var customer = mongoose.model('Customer');

function CustomersController(){
  this.index = function(req,res){
    customer.find({},function(err,results){
      if(err){
        console.log(err);
      }else{
        res.json(results);
      };
    });
  };
  this.create = function(req,res){
    customer.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating customer object \n",result);
        res.json(result);
      };
    });
  };
  this.delete = function(req,res){
    customer.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete customer success");
        res.json(result);
      };
    });
  };
};
module.exports = new CustomersController();
