app.controller('LoginController', ['$scope','LoginFactory', '$cookies','$location',function($scope,LoginFactory,$cookies,$location){
	$scope.register = function(registration){
		LoginFactory.create(registration,function(returned_data){
			if(returned_data.errors){
				console.log(returned_data.errors)
				$scope.errors = returned_data.errors
			}
			else{
				console.log(returned_data)
				$scope.user = returned_data.data
				$cookies.user = $scope.user;
				$location.url('/dashboard')
			}
		})
	}
}])