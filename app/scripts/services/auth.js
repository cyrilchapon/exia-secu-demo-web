'use strict';

angular.module('exiaSecuDemoWebApp')
    .factory('AuthService', function (Restangular, $localStorage) {
        return {
            auth: function(email, password) {
                var promise = Restangular.all('auth/signin').post({ email: email, password: password });
                promise.then(function(x) {
                    $localStorage.token = x.token;
                    Restangular.setDefaultHeaders({token: $localStorage.token});
                });
                return promise;
            },
            me: function() {
                return Restangular.one('auth/me').get();
            },
        };
    });