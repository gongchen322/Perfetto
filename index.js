//var jquery = require('jquery');
//var angular = require('./js/lib/angular');

var myApp = angular.module('myApp', ['ui.router','ngAnimate', 'ui.bootstrap']);
//var menController = require('./js/controllers/menController.js');
myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'js/view/partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
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

//myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
