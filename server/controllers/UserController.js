var mongoose = require('mongoose');
var user = mongoose.model('User');

function UserController(){
	this.index = function(req,res){
		user.find({},function(err,results){
			if(err){
				console.log(err);
			}
			else{
				res.json(results)
			}
		})
	};

	this.create = function(req,res){
		user.create(req.body,function(err,result){
			if(err){
				console.log(err)
				res.json(err)
			}else{
				console.log("success creating user object")
				res.json(result)
			}
		})
	}
	this.delete = function(req,res){
		user.remove({_id:req.params.id},function(err,result){
			if(err){
				console.log(err);
			}else{
				console.log("delete success")
				res.json(result);
			}
		})
	}
}

module.exports = new UserController();