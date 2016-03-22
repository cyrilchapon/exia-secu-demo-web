angular.module('exiaSecuDemoWebApp')
    .factory('AuthService', function (Restangular) {
        return {
            auth: function(email, password) {
                var promise = Restangular.all('auth/signin').post({ email: email, password: password });
                promise.then(function(x) {
                    Restangular.setDefaultHeaders({'token': x.token });
                });
                return promise;
            },
            me: function() {
                return Restangular.one('auth/me').get();
            },
        };
    });