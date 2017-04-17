app.controller('OrdersController',['$scope','productFactory','CustomerFactory','orderFactory',function($scope,productFactory,CustomerFactory,orderFactory){
  var product_index = function(){
    productFactory.index(function(returned_data){
      $scope.products = returned_data;
      console.log($scope.products)
    });
  };
  var customer_index = function(){
    CustomerFactory.index(function(returned_data){
      $scope.customers = returned_data;
      console.log($scope.customers)
    });
  };
  var order_index = function(){
    orderFactory.index(function(returned_data){
      $scope.orders = returned_data;
      console.log($scope.orders)
    });
  };

  $scope.products = [];
  $scope.customers = [];
  $scope.orders = [];
  product_index();
  customer_index();
  order_index();

  $scope.placeOrder = function (order){
    console.log(order);
    orderFactory.create(order,function(){
      order._buyer="";
      order._bought="";
      order.quantity="";
      order_index();
    });

  }

}])
