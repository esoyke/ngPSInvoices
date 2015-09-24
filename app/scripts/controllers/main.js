//(function () {
//'use strict';
//
///**
// * @ngdoc function
// * @name ngPsinvoicesApp.controller:MainCtrl
// * @description
// * # MainCtrl
// * Controller of the ngPsinvoicesApp
// */
//angular.module('ngPsinvoicesApp')
//  .controller('MainCtrl', ['invoiceResource', MainCtrl]);
//
//  function MainCtrl(invoiceResource) {
//
//    var main = this;
//    invoiceResource.query(function (data) {
//      main.invoices = data;
//    });
//  }
//
//}());


  'use strict';

  /**
   * @ngdoc function
   * @name ngPsinvoicesApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the ngPsinvoicesApp
   */
  angular.module('ngPsinvoicesApp')
      .controller('MainCtrl', ['invoiceResource', '$modal',

  function (invoiceResource, $modal){

    var main = this;
    invoiceResource.query(function (data) {
      main.invoices = data;
    });

    main.existingInvoiceModal = function(invoice) {
      $modal.open({
        templateUrl: '/templates/invoiceExisting.html',
        controller: 'InvoiceCtrl',
        size: 'lg',
        resolve: {
          invoice: function () {
            return invoice;
          }
        }
      });
    };

    main.newInvoiceModal = function(invoice) {
      $modal.open({
        templateUrl: '/templates/invoiceNew.html',
        controller: 'InvoiceCtrl',
        size: 'lg',
        resolve: {
          invoice: function () {
            return invoice;
          }
        }
      });
    };

    main.deleteInvoiceModal = function(invoice) {
      console.log('opening modal for invoice '+invoice.invoiceId);
      $modal.open({
        templateUrl: '/templates/invoiceDelete.html',
        controller: 'InvoiceCtrl',
        size: 'md',
        resolve: {
          invoice: function () {
            return invoice;
          }
        }
      });
    };

  }]);

