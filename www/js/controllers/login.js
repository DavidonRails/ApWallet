angular.module('login.controllers', [])

.controller('loginCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, UserService) {

    $scope.msg = "";

	$scope.user = {
		username : "ionstar", // 3100123456
		password : "appleseat" // appleseat
	};

    $scope.goBack = function() {
    	$state.go("login");
    };

    $scope.goSignup = function() {
        $state.go("signup");
    };

    $scope.goLogIn = function() {
        console.log($scope.user);

        $scope.msg = "";

        if (!$scope.user.username) {

          $scope.msg = "Please enter Username!";

        } else if (!$scope.user.password) {

          $scope.msg =  "Please enter Password!";

        } else {

            $state.go("tab.account.assets");
            /*
            $ionicLoading.show({
                template: 'ApWallet Login ...'
            });

            var params = {
                username    : $scope.user.username,
                password    : $scope.user.password
            };

            $http({
                method: 'POST',
                url: BACKEND_API + '/login',
                data : toparams(params),
                headers: HEADERS
            })
            .success( function( resp ) {
                $ionicLoading.hide();
                
                if(resp.status == 'success') {
                    var result = resp.response;
                    
                    UserService.setUser(result);

                    $state.go("app.home");
                }
            })
            .error(function(err) {
                $ionicLoading.hide();
                console.log('Failure - Login API');
                alert("Network Connection Error");
            });
            */
        }
        
    };
});















