'use strict';

/**
 * @ngdoc overview
 * @name ingredifriendsWebApp
 * @description
 * # ingredifriendsWebApp
 *
 * Main module of the application.
 */
angular
  .module('ingredifriendsWebApp', [
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
    'angularMoment'
  ]);
