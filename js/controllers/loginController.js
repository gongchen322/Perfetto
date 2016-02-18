(function() {
    
    var loginController = function ($scope,$http, dataService) {

      $scope.name = "";
      $scope.shippingAddress = "";
      $scope.billingAddress = "";
      $scope.email2 = "";
      $scope.password2 = "";

       $scope.signup= function () {
          var body={      
                name: $scope.name,
                shipping_address:$scope.shippingAddress,
                billing_address:$scope.billingAddress,
                email:$scope.email2,
                password:$scope.password2        
        };
         $http.post("/users", JSON.stringify(body)).success(function(data, status) {
            console.log("success");
        })
          console.log(JSON.stringify(body));
      };
    };

    loginController.$inject = ['$scope','$http','dataService'];

    angular.module('myApp')
      .controller('loginController', loginController);
    
    
}());