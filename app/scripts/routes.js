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
        controllerAs: 'main'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'SigninCtrl',
        controllerAs: 'signin'
      })
      .otherwise({
        redirectTo: '/'
      });
  });