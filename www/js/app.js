// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('ApWallet', ['ionic', 'login.controllers', 'signup.controllers', 'account.controllers', 'send.controllers', 
  'receive.controllers', 'settings.controllers', 'accountAssets.controllers', 'accountTrans.controllers', ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      $cordovaStatusbar.overlaysWebView(true);
      $cordovaStatusbar.styleColor('white');
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  document.body.classList.remove("platform-ios");
  document.body.classList.remove("platform-android");
  document.body.classList.add("platform-ios");
  document.body.classList.add("platform-android");

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tab.account.assets', {
    url: '/assets',
    views: {
      'account-tab-assets': {
        templateUrl: 'templates/account-assets.html',
        controller: 'accountAssetsCtrl'
      }
    }
  })

  .state('tab.account.trans', {
    url: '/trans',
    views: {
      'account-tab-trans': {
        templateUrl: 'templates/account-trans.html',
        controller: 'accountTransCtrl'
      }
    }
  })

  .state('tab.send', {
    url: '/send',
    views: {
      'tab-send': {
        templateUrl: 'templates/tab-send.html',
        controller: 'sendCtrl'
      }
    }
  })

  .state('tab.receive', {
    url: '/receive',
    views: {
      'tab-receive': {
        templateUrl: 'templates/tab-receive.html',
        controller: 'receiveCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'settingsCtrl'
      }
    }
  })
  
  ;

  // if none of the above states are matched, use this as the fallback
  // $urlRouterProvider.otherwise('/tab/dash');
  $urlRouterProvider.otherwise('/login');

});
