angular.module('signup.controllers', [])

.controller('signupCtrl', function(BACKEND_API, HEADERS, $rootScope, $state, $http, $ionicScrollDelegate, $ionicSideMenuDelegate, $scope,
 $ionicPlatform, $ionicHistory, $ionicLoading, $interval, REGX, UserService) {

	$scope.msg = "";

	$scope.user = {
		name : "james", // james
		email : "james@apwallet.com", // james@apwallet.com
		password : "12345678", // 12345678
		repassword : "12345678" // 12345678
	};

    $scope.goBack = function() {
      $state.go("login");
    };


	$scope.goSignUp = function() {

        $scope.msg = "";

        if (!$scope.user.name) {

          $scope.msg = "Please enter your Username!";

        } else if (!$scope.user.email) {

          $scope.msg = "Please enter your Email Address!";

        } else if (!REGX.validEmail($scope.user.email)) {

          $scope.msg = "Please enter valid Email Address!";

        } else if (!$scope.user.password) {

          $scope.msg =  "Please enter your Password!";

        } else if ($scope.user.password.length < 8) {

          $scope.msg =  "Password length must be bigger then 8 characters!";

        } else if ($scope.user.password.indexOf(' ') !=  -1) {

          $scope.msg =  "Password can not contain spaces!";

        } else if (!$scope.user.repassword.length) {

          $scope.msg =  "Please enter Confirm Password!";

        } else if ($scope.user.repassword != $scope.user.password) {

          $scope.msg =  "Password and Confirm Password doesn't match!";

        } else {

            /*
            $ionicLoading.show({
                template: 'ApWallet Register ...'
            });

            var params = {
				username	: $scope.user.name,
				email 		: $scope.user.email,
				phone 		: $scope.user.phone,
				zipcode 	: $scope.user.zipcode,
				password 	: $scope.user.password
            };

            $http({
                method: 'POST',
                url: BACKEND_API + '/register',
                data : toparams(params),
                headers: HEADERS
            })
            .success( function( resp ) {
            	$ionicLoading.hide();

            	console.log(resp);
            	
                if(resp.status == 'success') {
                    var result = resp.response.user_data;

			        // window.localStorage.setItem('id', result.last_insert_id);

			        $state.go("login");

                }
            })
            .error(function(err) {
            	$ionicLoading.hide();
                console.log('Failure - Signup API');
                alert("Network Connection Error");
            });
            */

        }
	}
});




















