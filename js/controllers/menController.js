(function() {
    
    var menController = function ($scope) {
        $scope.items = [
        {id:'1',source:'assets/pictures/clothing/men/1s.jpg',name:'Double wool cashmere coat', color:'Charles Black', price:'1150 USD'},
        {id:'2',source:'assets/pictures/clothing/men/2s.jpg',name:'Belted trenchcoat', color:'Minuto Balsam Green', price:'1250 USD'},
        {id:'3',source:'assets/pictures/clothing/men/3s.jpg',name:'Charles Charcoal Gray', color:'Charles Charcoal Gray', price:'1150 USD'},
        {id:'4',source:'assets/pictures/clothing/men/4s.jpg',name:'Shiny bomber jacket', color:'Who Black Black', price:'340  USD'},
        {id:'5',source:'assets/pictures/clothing/men/5s.jpg',name:'Apolo double charcoal grey', color:'Apolo double charcoal grey', price:'750 USD'},
        ];
    };
    

    angular.module('myApp')
      .controller('menController', menController);
    
}());