app.factory('userFactory',['$http',function($http){
  function userFactory(){
    var _this = this;

    this.index = function(callback){
      $http.get('/users').then(function(returned_data){
        users = returned_data;
        callback(users);
      });
    };

    this.AddCustomer = function(user,callback){
      $http.post('/user',user).then(function(returned_data){
        console.log("after http request",returned_data.data);
        callback(returned_data.data);
      })
    }
    this.RemoveCustomer = function(id){
      $http.delete(`/user/${id}`).then(function(returned_data){
        console.log("delete success",returned_data.data);
      });
    }
  }
  return new userFactory();
}])
