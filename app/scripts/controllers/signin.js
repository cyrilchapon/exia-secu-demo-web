'use strict';

/**
 * @ngdoc function
 * @name exiaSecuDemoWebApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the exiaSecuDemoWebApp
 */
angular.module('exiaSecuDemoWebApp')
  .controller('SigninCtrl', function ($scope, $location, AuthService) {
        $scope.email = $scope.password = '';
        $scope.connect = function(email, password) {
            AuthService.auth(email, password)
                .then(function(x) {
                    $location.path('/');
                })
                .catch(function(x) {
                    alert('Authentification or network error: ' + x);
                });
        };
    });
