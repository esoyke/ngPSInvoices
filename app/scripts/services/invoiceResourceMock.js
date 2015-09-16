/**
 * Created by esoyke on 9/15/15.
 */

(function () {
    "use strict";

    var app = angular
        .module("invoiceResourceMock",
        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
        var invoices = [
            {
                "invoiceId": 1,
                "invoiceName": "Schools Interface",
                "invoiceDate": "6/25/2015",
                "description": "Interface to replace Evolve usage by front-end staff",
                "clientId": 1283,
                "clientName": "SFCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 2,
                "invoiceName": "Plastics Enhancements",
                "invoiceDate": "7/12/2015",
                "description": "Enhancements to the plastics low-stock notification processs",
                "clientId": 1,
                "clientName": "PSCU",
                "amount": 2800,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 3,
                "invoiceName": "Project 003",
                "invoiceDate": "6/25/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 4,
                "invoiceName": "Project 004",
                "invoiceDate": "8/25/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 5,
                "invoiceName": "Project 005",
                "invoiceDate": "9/25/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 6,
                "invoiceName": "Project 006",
                "invoiceDate": "10/25/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 7,
                "invoiceName": "Project 007",
                "invoiceDate": "11/25/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 8,
                "invoiceName": "Project 008",
                "invoiceDate": "6/3/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 9,
                "invoiceName": "Project 009",
                "invoiceDate": "6/5/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 10,
                "invoiceName": "Project 010",
                "invoiceDate": "6/7/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 11,
                "invoiceName": "Project 011",
                "invoiceDate": "6/8/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 12,
                "invoiceName": "Project 012",
                "invoiceDate": "6/20/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 13,
                "invoiceName": "Project 013",
                "invoiceDate": "6/22/2015",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "SKelley"
            }
        ];

        var invoicesUrl = "/api/invoices"

        $httpBackend.whenGET(invoicesUrl).respond(invoices);

        var editingRegex = new RegExp(invoicesUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var invoice = {"invoiceId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].invoiceId == id) {
                        invoice = invoices[i];
                        break;
                    }
                };
            }
            return [200, invoice, {}];
        });

        $httpBackend.whenPOST(invoicesUrl).respond(function (method, url, data) {
            var invoice = angular.fromJson(data);

            if (!invoice.invoiceId) {
                // new invoice Id
                invoice.invoiceId = invoices[invoices.length - 1].invoiceId + 1;
                invoices.push(invoice);
            }
            else {
                // Updated invoice
                for (var i = 0; i < invoices.length; i++) {
                    if (invoices[i].invoiceId == invoice.invoiceId) {
                        invoices[i] = invoice;
                        break;
                    }
                };
            }
            return [200, invoice, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
