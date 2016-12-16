app.controller('ProductController',['$scope','productFactory',function($scope,productFactory){
  var index = function(){
    productFactory.index(function(returned_data){
      $scope.products = returned_data;
    });
  };

  $scope.products = {};
  index();
  $scope.AddProduct = function(product){
    console.log("product info in the controller",product);
    productFactory.create(product);
    index();
  };

}])
