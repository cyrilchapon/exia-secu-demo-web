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
        $scope.customers = [];
        
        CustomerService.fetchAll()
            .then(function(x) {
                $scope.customers = x;
            })
            .catch(function() {
                $scope.customers = [];
                $location.path('/signin');
            });
    });