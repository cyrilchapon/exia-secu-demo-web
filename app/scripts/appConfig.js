'use strict';

/**
 * @ngdoc constant
 * @name exiaSecuDemoWebApp.env
 * @description
 * # env
 * Provider in the exiaSecuDemoWebApp.
 */
angular.module('exiaSecuDemoWebApp')
  .constant('exiaSecuDemoWebConfig', {
    api: {
      url: 'http://localhost:1337'
    }
  });
