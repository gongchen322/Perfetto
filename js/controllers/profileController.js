angular.module('myApp').controller('profileController', ['$scope','dataService','Authorization', 
	function ($scope,dataService, Authorization) {	
      $scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
      $scope.name = (Authorization.authorized)?Authorization.userInfo.name:'';
      $scope.isLoggedIn = !Authorization.authorized;
    }
]);
