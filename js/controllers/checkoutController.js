(function() {

    var checkoutController = function ($scope,$state,dataService, Authorization) {	
    	 $scope.cart = dataService.cart;
    	 $scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
    	 $scope.name = (Authorization.authorized)?Authorization.userInfo.name:'';
    	 $scope.shippingAddress = Authorization.userInfo.shipping_address;
    }
    checkoutController.$inject = ['$scope','$state','dataService','Authorization'];

    angular.module('myApp')
      .controller('checkoutController', checkoutController);
    
    
}());