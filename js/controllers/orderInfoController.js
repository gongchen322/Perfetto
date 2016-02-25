(function() {

    var orderInfoController = function ($scope, $http, dataService, Authorization) {
        
        var req = {
              method: 'GET',
              url: '/orders',
              headers: {
                  'Auth': localStorage.getItem('yourTokenKey')
              }
          };          
          $http(req).success(function(data, status) {
            console.log('Succuessfully retrieved saved orders');
            $scope.orders = data;         
          }); 
    };

    orderInfoController.$inject = ['$scope','$http','dataService','Authorization'];

    angular.module('myApp')
      .controller('orderInfoController', orderInfoController);
    
    
}());