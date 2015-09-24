/**
 * Created by esoyke on 9/17/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name ngPsinvoicesApp.controller:InvoiceCtrl
 * @description
 * # MainCtrl
 * Controller of the ngPsinvoicesApp
 */
angular.module('ngPsinvoicesApp').controller('InvoiceCtrl', function ($scope, $modalInstance, invoice) {

    function InvoiceCtrl ($scope) {
        console.log('InvoiceCtrl');
    };


    $scope.invoice = invoice;

    $scope.ok = function (item) {
        if(item.invoiceId)
            console.log('updating invoice "'+item.invoiceName+'"');
        else
            console.log('saving new invoice "'+item.invoiceName+'"');

        //TODO- save update
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

    $scope.delete = function (item) {
        console.log('deleting invoice "'+item.invoiceName+'"');
        //TODO- delete
        $modalInstance.close();
    };
});