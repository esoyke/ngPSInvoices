/**
 * Created by esoyke on 9/15/15.
 */
(function () {
    "use strict";

    angular
        .module("ngPsinvoicesApp")
        .factory("invoiceResource",
        ["$resource",
            invoiceResource]);

    function invoiceResource($resource) {
        return $resource("/api/invoices/:invoiceId")
    }

}());
