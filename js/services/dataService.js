angular.module('myApp').service('dataService', [
	function () {
		var myStore = new store();
    	var myCart = new cart("AngularStore");
        return {
            store: myStore,
            cart: myCart
          };
    }
]);
