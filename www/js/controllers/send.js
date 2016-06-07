angular.module('send.controllers', [])

.controller('sendCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, UserService) {

    $scope.goBack = function() {
    	$state.go("login");
    };

});















