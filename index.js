//var jquery = require('jquery');
//var angular = require('./js/lib/angular');

var myApp = angular.module('myApp', ['ui.router','ngAnimate', 'ui.bootstrap']);

//var menController = require('./js/controllers/menController.js');
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES 
        .state('home', {
            url: '/home',
            templateUrl: 'js/view/partial-home.html'
        })
        
        // CART PAGE
        .state('cart', {
            url: '/cart',
            templateUrl: 'js/view/cart.html',
            controller: 'cartController'
        })
        // SHOP PAGE AND NESTED VIEWS  =================================
        .state('shop', {
          	url: '/shop/men',
            templateUrl: 'js/view/shop.html'
        })

        .state('shop.men', {
        url: '/',
        templateUrl: 'js/view/men.html',
        controller: 'menController'
    	})

         .state('shop.women', {
        url: '/women',
        templateUrl: 'js/view/women.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }})

         .state('shop.sale', {
        url: '/sale',
        templateUrl: 'js/view/sale.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }})

         .state('shop.collections', {
        url: '/collections',
        templateUrl: 'js/view/collections.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }})

         .state('shop.stores', {
        url: '/stores',
        templateUrl: 'js/view/stores.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
    	}});

        
});


myApp.factory("DataService", function() {
  var myStore = new store();
  var myCart = new cart("AngularStore");
  myCart.addCheckoutParameters("PayPal", "your PayPal merchant account id");
  myCart.addCheckoutParameters("Google", "your Google merchant account id ", {
    ship_method_name_1: "UPS Next Day Air",
    ship_method_price_1: "20.00",
    ship_method_currency_1: "USD",
    ship_method_name_2: "UPS Ground",
    ship_method_price_2: "15.00",
    ship_method_currency_2: "USD"
  });
  return {
    store: myStore,
    cart: myCart
  };
});


//myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
