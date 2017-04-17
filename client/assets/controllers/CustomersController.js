app.controller('CustomersController',['$scope','CustomerFactory',function($scope,CustomerFactory){
  var index = function(){
    CustomerFactory.index(function(returned_data){
      console.log("this is the index from customer controller",returned_data);
      $scope.customers = returned_data;
    });
  };

  $scope.customers = {}
  index();

  $scope.create = function(customer){
    CustomerFactory.create(customer,function(){
      customer.name="";
      customer.email="";
    });
    index();
  };

  $scope.remove = function(id){
    console.log("this is the id got from the function", id)
    CustomerFactory.remove(id);
    index();
  };
}])
