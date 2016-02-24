(function() {

    var profileController = function ($scope,dataService, Authorization) {
    	$isLoggedIn = !Authorization.authorized;
    };

    profileController.$inject = ['$scope','dataService','Authorization'];

    angular.module('myApp')
      .controller('profileController', profileController);
    
    
}());