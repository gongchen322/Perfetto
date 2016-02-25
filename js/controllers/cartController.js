(function() {

    var cartController = function ($scope,$state,dataService, Authorization) {
       $scope.store = dataService.store;
       $scope.cart = dataService.cart;
       $scope.name = (Authorization.authorized)?Authorization.userInfo.name:'Guest';
       $scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
       $scope.goCheckout = function () {
    		if(!Authorization.authorized){
    			alert("please login first.");
    		}else {
    			$state.go('checkout');
    		}
    	}
    };

    cartController.$inject = ['$scope','$state','dataService','Authorization'];

    angular.module('myApp')
      .controller('cartController', cartController);
    
    
}());