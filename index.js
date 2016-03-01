
var myApp = angular.module('myApp', ['ui.router','ngAnimate', 'ui.bootstrap']);

myApp
.constant('_', window._)
.config(function($stateProvider, $urlRouterProvider) {
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
        // CHECKOUT PAGE
        .state('checkout', {
            url: '/checkout',
            templateUrl: 'js/view/checkout.html',
            controller: 'checkoutController'
        })
        // LOGIN PAGE
        .state('account_login', {
            url: '/account_login',
            templateUrl: 'js/view/account_login.html',
            controller: 'loginController'
        })
        // PROFILE PAGE
        .state('profile', {
            url: '/profile',
            templateUrl: 'js/view/profile.html',
            controller: 'profileController',
            data: {
                authorization: true,
                redirectTo: 'account_login',
                
            }
        })
        // USERINFO PAGE
        .state('profile.userInfo', {
        url: '/',
        templateUrl: 'js/view/userInfo.html',
        controller: 'userInfoController'
        })
        // ORDER PAGE
        .state('profile.orders', {
        url: '/profile/orders',
        templateUrl: 'js/view/orderInfo.html',
        controller: 'orderInfoController'
        })        
        // SHOP PAGE AND NESTED VIEWS  =================================
        .state('shop', {
          	url: '/shop',
            templateUrl: 'js/view/shop.html',
            controller: 'shopController'
        })
        // SHOPMEN PAGE
        .state('shop.men', {
        url: '/men',
        templateUrl: 'js/view/men.html',
        controller: 'menController'
    	})
        // SHOPWOMEN PAGE
         .state('shop.women', {
        url: '/women',
        templateUrl: 'js/view/women.html',
        controller: 'womenController'
        });
        /*
         .state('shop.sale', {
        url: '/sale',
        templateUrl: 'js/view/sale.html'
        })

         .state('shop.collections', {
        url: '/collections',
        templateUrl: 'js/view/collections.html'
        })

         .state('shop.stores', {
        url: '/stores',
        templateUrl: 'js/view/stores.html'
        });*/

        
})
.run(function(_,$rootScope, $state, Authorization) {
  $rootScope._ = window._;
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (!Authorization.authorized) {
      if (Authorization.memorizedState && (!_.has(fromState, 'data.redirectTo') || toState.name !== fromState.data.redirectTo)) {
        Authorization.clear();
      }
      if (_.has(toState, 'data.authorization') && _.has(toState, 'data.redirectTo')) {
        if (_.has(toState, 'data.memory')) {
          Authorization.memorizedState = toState.name;
        }
        $state.go(toState.data.redirectTo);
      }
    }

  });

  $rootScope.onLogout = function() {
    Authorization.clear();
    $state.go('home');
  };
})
.service('Authorization', function($state) {
  
  console.log("this is your token"+localStorage.getItem('yourTokenKey'));
  this.authorized = (localStorage.getItem('yourTokenKey')==null)?false:true;
  this.memorizedState = null;
  this.userInfo = (localStorage.getItem('userInfo')== null)?{}:JSON.parse(localStorage.getItem('userInfo'));
  var
  clear = function() {
    console.log("logged out");
    this.authorized = false;
    this.memorizedState = null;
    this.userInfo = {};
    localStorage.removeItem('yourTokenKey');
    localStorage.removeItem('userInfo');
    $state.go('shop.men');
  },

  go = function(fallback) {
    this.authorized = true;
    var targetState = this.memorizedState ? this.memorizedState : fallback;
    $state.go(targetState);
  };

  return {
    authorized: this.authorized,
    memorizedState: this.memorizedState,
    userInfo:this.userInfo,
    clear: clear,
    go: go
  };
});







//myApp.controller('mainCtrl', require('./js/controllers/mainCtrl'));
