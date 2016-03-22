'use strict';

/**
 * @ngdoc overview
 * @name exiaSecuDemoWebApp
 * @description
 * # exiaSecuDemoWebApp
 *
 * Routes for the application.
 */
angular
  .module('exiaSecuDemoWebApp')
  .config(function ($routeProvider) {  
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          hasToken: function(authorization) {
            return authorization.hasToken();
          }
        }
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, authorization, $location) {
    $rootScope.$on("$routeChangeError", function (event, current, previous, rejection) {
      if(rejection === authorization.rejectionReason) {
        $location.path('/signin');
      }
    });
  });