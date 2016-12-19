app.factory('orderFactory',['$http',function($http){
  function orderFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/orders').then(function(returned_data){
        orders = returned_data.data;
        callback(orders);
      });
    };

    this.AddOrder = function(order,callback){
      $http.post('/order',order).then(function(returned_data){
        console.log("after http request",returned_data.data);
        callback(returned_data.data);
      })
    }
  }
  return new orderFactory();
}])
