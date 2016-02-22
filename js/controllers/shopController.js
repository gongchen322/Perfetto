(function() {

    var shopController = function ($scope,$location,dataService) {
    	$scope.location = (dataService.isLoggedIn)? 'profile':'account_login';
    };

    shopController.$inject = ['$scope','$location','dataService'];

    angular.module('myApp')
      .controller('shopController', shopController);
    
    
}());