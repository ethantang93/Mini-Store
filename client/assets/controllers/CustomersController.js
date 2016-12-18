app.controller('CustomersController',['$scope','userFactory',function($scope,userFactory){
  var index = function(){
    userFactory.index(function(returned_data){
      console.log("this is the index from customer controller",returned_data.data);
      $scope.customers = returned_data.data;
    });
  };

  $scope.customers = {}
  index();

  $scope.AddCustomer = function(customer){
    userFactory.AddCustomer(customer,function(){
      customer.name="";
    });
    index();
  }
}])
