angular.module('accountTrans.controllers', [])

.controller('accountTransCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, UserService, $ionicModal) {

    $scope.goBack = function() {
    	$state.go("login");
    };

});















