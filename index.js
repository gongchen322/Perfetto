//var jquery = require('jquery');
//var angular = require('./js/lib/angular');


var myApp = angular.module('myApp', ['ui.router']);

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
          	url: '/shop',
            templateUrl: 'js/view/shop.html'
        });
        
});

//myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
