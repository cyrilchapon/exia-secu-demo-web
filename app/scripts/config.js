'use strict';

/**
 * @ngdoc overview
 * @name exiaSecuDemoWebApp
 * @description
 * # exiaSecuDemoWebApp
 *
 * Config for the application.
 */
angular
  .module('exiaSecuDemoWebApp')
  .config(function(RestangularProvider, exiaSecuDemoWebConfig) {
    RestangularProvider.setBaseUrl(exiaSecuDemoWebConfig.api.url);
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
  });
