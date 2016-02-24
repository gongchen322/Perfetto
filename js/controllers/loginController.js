(function() {
    
    var loginController = function ($scope,$location, $http, dataService, Authorization) {

      $scope.name = "";
      $scope.shippingAddress = "";
      $scope.billingAddress = "";
      $scope.email2 = "";
      $scope.password2 = "";

      //Sign Up function
      $scope.signup= function () {
          var body={      
                name: $scope.name,
                shipping_address:$scope.shippingAddress,
                billing_address:$scope.billingAddress,
                email:$scope.email2,
                password:$scope.password2        
        };
         $http.post("/users", JSON.stringify(body)).success(function(data, status) {
            console.log("Successful signup");         
        })
      };

      //Login Function
      $scope.login= function () {
          var body={
                email:$scope.email1,
                password:$scope.password1        
        };
         $http.post("/users/login", JSON.stringify(body)).success(function(data, status, headers) {
            console.log("Successful login");
            Authorization.go('profile.userInfo');
    
            localStorage.setItem('yourTokenKey', headers('Auth'));
            data=JSON.stringify(data);
            localStorage.setItem('userInfo',data);
            Authorization.userInfo = data;
        })   
      };
    };

    loginController.$inject = ['$scope','$location','$http','dataService','Authorization'];

    angular.module('myApp')
      .controller('loginController', loginController);
    
    
}());