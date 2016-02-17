(function() {
    $(".popup_item").on('blur',function(){
    	$(this).fadeOut(300);
	});



    var menController = function ($scope,$uibModal,$log, dataService) {
        /*$scope.items = [
        {id:'1',source:'assets/pictures/clothing/men/1s.jpg',source_large:'assets/pictures/clothing/men/1.jpg',name:'Double wool cashmere coat', color:'Charles Black', price:'1150 USD'},
        {id:'2',source:'assets/pictures/clothing/men/2s.jpg',source_large:'assets/pictures/clothing/men/2.jpg',name:'Belted trenchcoat', color:'Minuto Balsam Green', price:'1250 USD'},
        {id:'3',source:'assets/pictures/clothing/men/3s.jpg',source_large:'assets/pictures/clothing/men/3.jpg',name:'Charles Charcoal Gray', color:'Charles Charcoal Gray', price:'1150 USD'},
        {id:'4',source:'assets/pictures/clothing/men/4s.jpg',source_large:'assets/pictures/clothing/men/4.jpg',name:'Shiny bomber jacket', color:'Who Black Black', price:'340  USD'},
        {id:'5',source:'assets/pictures/clothing/men/5s.jpg',source_large:'assets/pictures/clothing/men/5.jpg',name:'Apolo double charcoal grey', color:'Apolo double charcoal grey', price:'750 USD'},
        ];
        */
        $scope.items=dataService.store.products;
        $scope.id=1;
        
        $scope.animationsEnabled = true;

        $scope.open = function (id) {

	      var modalInstance = $uibModal.open({
  	      animation: $scope.animationsEnabled,
  	      templateUrl: 'myModalContent.html',
  	      controller: 'ModalInstanceCtrl',
  	      id: id,
  	      resolve: {
  	        item: function () {
  	          return dataService.store.getProduct(id);
  	        }
	        }
	      });
	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
        };
        

  		$scope.setSize = function (size) {
    			$scope.size=size;
  		};

    };

    var ModalInstanceCtrl = function ($scope, $uibModalInstance, item, dataService) {

  		$scope.item=item;
  		$scope.size='Choose your size';
  		
      $scope.addToOrder= function () {
        dataService.cart.addItem(item.id, item.name, item.color,$scope.size, item.price, $('#quantity').val(), item.main_image, item.images);
        $uibModalInstance.dismiss('cancel');
        console.log("item added"+item.name + "quantity is "+$('#quantity').val());
      };

  	  $scope.cancel = function () {
  	    $uibModalInstance.dismiss('cancel');
  	  };

  	  $scope.setSize = function (size) {
      			$scope.size=size;
    		};

      //When changing the route, the modalInstance will disappear. Otherwise, it may cause a bug
      $scope.$on('$routeChangeStart', function(){
          $modalInstance.close();
      });
      };  

  	menController.$inject = ['$scope', '$uibModal','$log','dataService'];
    ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'item','dataService'];

    angular.module('myApp')
      .controller('menController', menController);
    angular.module('myApp')
      .controller('ModalInstanceCtrl', ModalInstanceCtrl);
    
    
}());