(function() {

    var cartController = function ($scope,dataService) {
       $scope.store = dataService.store;
       $scope.cart = dataService.cart;
    };

    cartController.$inject = ['$scope','dataService'];

    angular.module('myApp')
      .controller('cartController', cartController);
    
    
}());