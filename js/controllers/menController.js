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
        	console.log(id);
	    var modalInstance = $uibModal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'myModalContent.html',
	      controller: 'ModalInstanceCtrl',
	      id: id,
	      resolve: {
	        items: function () {
	          return $scope.items;
	        },
	        id: function () {
	          return id-1;
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

    var ModalInstanceCtrl = function ($scope, $uibModalInstance, items, id) {
        $scope.items = items;
        $scope.id = id;
  		$scope.item=items[id];
  		$scope.size='Small';
  		$scope.ok = function () {
	    $uibModalInstance.close($scope.selected.item);
	  };

	  $scope.cancel = function () {
	    $uibModalInstance.dismiss('cancel');
	  };
	  $scope.setSize = function (size) {
    			$scope.size=size;
  		};
    $scope.$on('$routeChangeStart', function(){
        $modalInstance.close();
    });
    };  

  	menController.$inject = ['$scope', '$uibModal','$log','dataService'];
    ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', 'items','id'];

    angular.module('myApp')
      .controller('menController', menController);
    angular.module('myApp')
      .controller('ModalInstanceCtrl', ModalInstanceCtrl);
    
    
}());