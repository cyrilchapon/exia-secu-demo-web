'use strict';

/**
 * @ngdoc overview
 * @name ingredifriendsWebApp
 * @description
 * # ingredifriendsWebApp
 *
 * Config for the application.
 */
angular
  .module('ingredifriendsWebApp')
  .config(function(RestangularProvider, ingredifriendsWebConfig) {
    RestangularProvider.setBaseUrl(ingredifriendsWebConfig.api.url);
    //RestangularProvider.setDefaultHttpFields({withCredentials: true});
  })
  .config(function(tmhDynamicLocaleProvider){
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
  })
  .config(function($translateProvider) {
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider
      .useStaticFilesLoader({
        files: [{
          prefix: 'languages/',
          suffix: '.json'
        }]
      })
      .registerAvailableLanguageKeys(['en','fr'], {
        'en*': 'en',
        'fr*': 'fr'
      });
    
    //$translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('en');
  })
  .run(function(tmhDynamicLocale, $window, $translate, amMoment){
    //get browser locale
    var lang = $window.navigator.userLanguage || $window.navigator.language;
    
    //configure locale
    tmhDynamicLocale.set(lang ? lang.toLowerCase() : null);
    
    //configure language
    $translate.use(lang);
    
    //configure locale for angular-moment
    amMoment.changeLocale(lang);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
