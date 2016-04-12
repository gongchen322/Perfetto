angular.module('myApp').controller('collectionController', ['$scope','$state','dataService',
	function ($scope,$state,dataService) {	
    	$scope.collection_imgs = dataService.store.collections;	 
   		$scope.currentId=1;
   		/*
   		$("#collection-panel > div:gt(0)").hide();

		setInterval(function() { 
		  $('#collection-panel > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#collection-panel');
		},  3000);*/
	
		$('.collection-panel').each(function(){
  // scope everything for each slideshow
  var $this = this;
  $('> :gt(0)', $this).hide();
  setInterval(function(){
    $('> :first-child',$this).fadeOut(1000)
      .next().fadeIn(1000).end()
      .appendTo($this);
  }, 3000);
})



	}
]);