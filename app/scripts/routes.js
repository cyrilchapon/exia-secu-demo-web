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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });