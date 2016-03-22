'use strict';

angular.module('exiaSecuDemoWebApp')
  .service('CustomerService', function ($log, $q, Restangular) {

    var customers = Restangular.all('customers');

    this.fetchAll = function () {
      return customers.getList();
    };

    this.save = function (customer) {
      return customer.save();
    };

    this.delete = function (customer) {
      return customer.remove();
    };

    this.get = function (id) {
      return customers.get(id);
    };
  });
