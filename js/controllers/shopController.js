angular.module('myApp').controller('shopController', ['$scope','$http','$location','dataService','Authorization', 
    function ($scope,$http,$location,dataService,Authorization) {
        $scope.location = (Authorization.authorized)? 'profile.userInfo':'account_login';
        console.log("login status is"+Authorization.authorized);
        $scope.name = (Authorization.authorized)?Authorization.userInfo.name:'Guest';
        $scope.isLoggedIn = !Authorization.authorized;
        console.log("is loggedIn is "+ $scope.isLoggedIn);
        $scope.logout = function() {
            $http.delete("/users/login",{
                headers: {'Auth': localStorage.getItem('yourTokenKey')}
            }).success(function(data, status) {
            console.log("Successful logout");         
        })
            Authorization.clear();
            $scope.isLoggedIn = !Authorization.authorized;
        }
    }
    ]);
