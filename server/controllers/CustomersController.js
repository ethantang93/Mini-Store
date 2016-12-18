var mongoose = require('mongoose');
var user = mongoose.model('User');

function CustomersController(){
  this.index = function(req,res){
    user.find({},function(err,results){
      if(err){
        console.log(err);
      }else{
        res.json(results);
      };
    });
  };
  this.create = function(req,res){
    user.create(req.body,function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("success creating user object",result);
        res.json(result);
      };
    });
  };
  this.delete = function(req,res){
    user.remove({_id:req.params.id},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log("delete user success",result);
        res.json(result);
      };
    });
  };
};
module.exports = new CustomersController();
