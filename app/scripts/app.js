'use strict';

/**
 * @ngdoc overview
 * @name exiaSecuDemoWebApp
 * @description
 * # exiaSecuDemoWebApp
 *
 * Main module of the application.
 */
angular
  .module('exiaSecuDemoWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ui.bootstrap',
    'ui.router',
    '$q-spread',
    'tmh.dynamicLocale',
    'pascalprecht.translate',
    'angularMoment',
    'ngStorage'
  ])
  .run(function($rootScope, $localStorage, $location, Restangular) {
    $rootScope.signOut = function() {
      $localStorage.token = null;
      Restangular.setDefaultHeaders({token: null});
      $location.path('/signin');
    };
  });
