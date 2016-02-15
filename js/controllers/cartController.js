(function() {

    var cartController = function ($scope,DataService) {
       $scope.store = DataService.store;
       $scope.cart = DataService.cart;
    };

    angular.module('myApp')
      .controller('cartController', cartController);
    
    
}());