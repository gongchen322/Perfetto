angular.module('myApp').controller('userInfoController', ['$scope','dataService','Authorization', 
    function ($scope,dataService,Authorization) {
      console.log("this is "+Authorization.authorized);
       
       $scope.name = Authorization.userInfo.name;
       $scope.email = Authorization.userInfo.email;
       $scope.shippingAddress = Authorization.userInfo.shipping_address;
       $scope.billingAddress = Authorization.userInfo.billing_address;
    }
]);
