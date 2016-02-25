(function() {
    
    var loginController = function ($scope,$location, $http, dataService, Authorization) {
      $scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
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
        }).error(function(data, status) {
            console.error('Repos error', status, data);
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
            Authorization.userInfo = JSON.parse(data);
            console.log("aaa "+Authorization.authorized);
            console.log("user info is now "+ Authorization.userInfo);
        })   
      };
    };

    loginController.$inject = ['$scope','$location','$http','dataService','Authorization'];

    angular.module('myApp')
      .controller('loginController', loginController);
    
    
}());