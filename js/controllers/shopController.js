(function() {

    var shopController = function ($scope,$location,dataService,Authorization) {
    	$scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
    	console.log("login status is"+Authorization.authorized);

    	$scope.name = (Authorization.authorized)?Authorization.userInfo.name:'';
    	$scope.isLoggedIn = !Authorization.authorized;
    	console.log("is loggedIn is "+ $scope.isLoggedIn);
    	$scope.logout = function() {
    		Authorization.clear();
    		$scope.isLoggedIn = !Authorization.authorized;
    	}
    };

    shopController.$inject = ['$scope','$location','dataService','Authorization'];

    angular.module('myApp')
      .controller('shopController', shopController);
    
    
}());