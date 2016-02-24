(function() {

    var userInfoController = function ($scope,dataService,Authorization) {
    	console.log("this is "+Authorization.authorized);
       
       $scope.name = Authorization.userInfo.name;
       $scope.email = Authorization.userInfo.email;
       $scope.shippingAddress = Authorization.userInfo.shipping_address;
       $scope.billingAddress = Authorization.userInfo.billing_address;
    };

    userInfoController.$inject = ['$scope','dataService','Authorization'];

    angular.module('myApp')
      .controller('userInfoController', userInfoController);
    
    
}());