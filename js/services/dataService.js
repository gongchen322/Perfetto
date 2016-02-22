(function () {
	var dataService = function () {
		var myStore = new store();
        var myCart = new cart("AngularStore");
  		
        var LOCAL_TOKEN_KEY = 'yourTokenKey';

        var isLoggedIn = false;

        return {
            store: myStore,
            cart: myCart,
            isLoggedIn:isLoggedIn
          };
    	};

	angular.module('myApp').service('dataService', dataService);
}());