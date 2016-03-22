'use strict';

/**
 * @ngdoc function
 * @name exiaSecuDemoWebApp.controller:SigninCtrl
 * @description
 * # SigninCtrl
 * Controller of the exiaSecuDemoWebApp
 */
angular.module('exiaSecuDemoWebApp')
  .controller('SigninCtrl', function ($scope, $location, AuthService, $window) {
        $scope.email = $scope.password = '';
        
        $scope.connect = function(email, password) {
            AuthService.auth(email, password)
                .then(function() {
                    $location.path('/');
                })
                .catch(function(x) {
                    $window.alert('Authentification or network error: ' + x);
                });
        };
    });
