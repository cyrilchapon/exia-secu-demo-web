'use strict';

/**
 * @ngdoc service
 * @name exiaSecuDemoWebApp.authorization
 * @description
 * # authorization
 * Service in the exiaSecuDemoWebApp.
 */
angular.module('exiaSecuDemoWebApp')
  .service('authorization', function ($q, $localStorage) {
    var authorizationSrv = {};

    authorizationSrv.rejectionReason = 'Unauthorized';

    authorizationSrv.hasToken = function() {
      var deferred = $q.defer();

      if(!!$localStorage.token) {
        deferred.resolve();
      } else {
        deferred.reject(authorizationSrv.rejectionReason);
      }

      return deferred.promise;
    };

    return authorizationSrv;
  });
