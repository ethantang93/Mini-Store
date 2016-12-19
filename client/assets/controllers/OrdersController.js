app.controller('OrdersController',['$scope','productFactory','userFactory','orderFactory',function($scope,productFactory,userFactory,orderFactory){
  var product_index = function(){
    productFactory.index(function(returned_data){
      $scope.products = returned_data;
      console.log($scope.products)
    });
  };
  var user_index = function(){
    userFactory.index(function(returned_data){
      $scope.users = returned_data;
      console.log($scope.users)
    });
  };

  $scope.products = [];
  $scope.users = []
  product_index();
  user_index();


  $scope.placeOrder = function (order){
    console.log(order);
    orderFactory.AddOrder(order)
  }

}])
