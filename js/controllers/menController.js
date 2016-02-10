(function() {
    
    var menController = function ($scope) {
        $scope.imgs = [
        {id:'1',source:'assets/pictures/clothing/men/1s.jpg'},
        {id:'2',source:'assets/pictures/clothing/men/2s.jpg'},
        {id:'3',source:'assets/pictures/clothing/men/3s.jpg'},
        {id:'4',source:'assets/pictures/clothing/men/4s.jpg'},
        {id:'5',source:'assets/pictures/clothing/men/5s.jpg'},
        ];
    };
    

    angular.module('myApp')
      .controller('menController', menController);
    
}());