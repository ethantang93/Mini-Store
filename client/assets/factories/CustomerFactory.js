app.factory('CustomerFactory',['$http',function($http){
  function CustomerFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/customers').then(function(returned_data){
        customers = returned_data.data;
        callback(customers);
      });
    };

    this.create = function(customer,callback){
      $http.post('/customer',customer).then(function(returned_data){
        console.log("after http request",returned_data.data);
        callback(returned_data.data);
      })
    }
    this.remove = function(id){
      $http.delete(`/customer/${id}`).then(function(returned_data){
        console.log("delete success",returned_data.data);
      });
    }
  }
  return new CustomerFactory();
}])
