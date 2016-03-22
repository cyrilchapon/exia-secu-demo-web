'use strict';

/**
 * @ngdoc function
 * @name exiaSecuDemoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exiaSecuDemoWebApp
 */
angular.module('exiaSecuDemoWebApp')
    .controller('MainCtrl', function ($scope, $location, CustomerService) {
        $scope.connected = false;
        $scope.customers = [];
        CustomerService.fetchAll()
            .then(function(x) {
                $scope.connected = true;
                $scope.customers = x;
                console.log(x);
            })
            .catch(function(x) {
                $scope.connected = false;
                $scope.customers = [];
                console.error(x);
                $location.path('/signin');
            });
    });