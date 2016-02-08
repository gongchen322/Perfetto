var jquery = require('jquery');
var angular = require('./js/lib/angular');


var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
