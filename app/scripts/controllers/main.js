(function () {
'use strict';

/**
 * @ngdoc function
 * @name ngPsinvoicesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPsinvoicesApp
 */
angular.module('ngPsinvoicesApp')
  .controller('MainCtrl', ['invoiceResource', MainCtrl]);

  function MainCtrl(invoiceResource) {

    var main = this;
    invoiceResource.query(function (data) {
      main.invoices = data;
    });
  }

}());
