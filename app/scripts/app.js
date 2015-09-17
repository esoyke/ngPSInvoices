(function () {
  'use strict';
//require('newrelic');

  /**
   * @ngdoc overview
   * @name ngPsinvoicesApp
   * @description
   * # ngPsinvoicesApp
   *
   * Main module of the application.
   */
  angular
      .module('ngPsinvoicesApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'invoiceResourceMock',
        'ui.bootstrap' //using this for modal
        //'invoiceExistingModalService'
      ])
      .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
              templateUrl: 'index.html',//views/main.html',
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

//var Logger = require('le_node');
//var log = new Logger({
//  token:'3d37752e-0e40-47c5-bd7f-1f4b83d6d94e'
//});
}());