(function() {
    
    var loginController = function ($scope,$location, $http, dataService) {

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
            console.log("success signup");
            //$location.path('/profile');
        })
          console.log(JSON.stringify(body));
      };

      //Login Function
      $scope.login= function () {
          var body={
                email:$scope.email1,
                password:$scope.password1        
        };
         $http.post("/users/login", JSON.stringify(body)).success(function(data, status, headers) {
            console.log("success login");
            dataService.isLoggedIn = true;
            console.log(dataService.isLoggedIn);
            console.log("header:"+headers('Auth'));
            //$location.path('/profile');
        })
          console.log(JSON.stringify(body));
      };


    };

    loginController.$inject = ['$scope','$location','$http','dataService'];

    angular.module('myApp')
      .controller('loginController', loginController);
    
    
}());