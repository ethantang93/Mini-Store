app.factory('LoginFactory', ['$http',function($http){
	function LoginFactory(){
		var _this = this;
		this.create = function(registration,callback){
			$http.post('/user',registration).then(function(returned_data){
				callback(returned_data.data)
			})
		}

	}
	return new LoginFactory()
}])