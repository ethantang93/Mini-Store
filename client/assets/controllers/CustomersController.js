app.controller('CustomersController',['$scope','userFactory',function($scope,userFactory){
  var index = function(){
    userFactory.index(function(returned_data){
      console.log("this is the index from customer controller",returned_data);
      $scope.customers = returned_data;
    });
  };

  $scope.customers = {}
  index();

  $scope.AddCustomer = function(customer){
    userFactory.AddCustomer(customer,function(){
      customer.name="";
    });
    index();
  };

  $scope.RemoveCustomer = function(id){
    console.log("this is the id got from the function", id)
    userFactory.RemoveCustomer(id);
    index();
  };
}])
