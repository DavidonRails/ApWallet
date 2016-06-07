angular.module('accountAssets.controllers', [])

.controller('accountAssetsCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, UserService, $ionicModal) {

    $scope.goBack = function() {
    	$state.go("login");
    };

  	/***** Buy Modal Dialog *****/

    $scope.pros_data = [
    	{id:0,
    	pros_name:"Alie",
    	pros_url: "http://www.placeimg.com/30/30/people/0"},
    	{id:1,
    	pros_name:"Henry",
    	pros_url: "http://www.placeimg.com/30/30/people/1"},
    	{id:2,
    	pros_name:"Ruud",
    	pros_url: "http://www.placeimg.com/30/30/people/2"},
    ];

	$ionicModal.fromTemplateUrl('templates/buyModal.html', {
	    scope: $scope,
	    animation: 'slide-in-right'
    }).then(function(modal) {
      	$scope.buy_modal = modal;
    });

  	$scope.openBuyModal = function(){
    	$scope.buy_modal.show();
  	};

  	$scope.closeBuyModal = function(){
    	$scope.buy_modal.hide();
  	};

  	$scope.goOkay = function() {
  		$scope.closeBuyModal();
  	}

});















