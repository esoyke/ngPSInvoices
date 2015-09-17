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
      .controller('MainCtrl', ['invoiceResource', '$modal',//'invoiceExistingModalService',

  function (invoiceResource, $modal){ //}, invoiceExistingModalService) {

    var main = this;
    invoiceResource.query(function (data) {
      main.invoices = data;
    });

    main.existingInvoiceModal = function(invoice) {
      console.log('opening modal for invoice '+invoice.invoiceId);
      $modal.open({
        templateUrl: 'invoiceExistingModal.html',
        //templateUrl: 'views/invoiceExisting.html',
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
      console.log('opening modal for new invoice');
      $modal.open({
        templateUrl: 'invoiceNewModal.html',
        //templateUrl: 'views/invoiceExisting.html',
        controller: 'InvoiceCtrl',
        size: 'lg',
        resolve: {
          invoice: function () {
            return invoice;
          }
        }
      });
    };

  }]);

