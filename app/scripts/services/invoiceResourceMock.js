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
                "invoiceDate": "2015-01-04",
                "description": "Interface to replace Evolve usage by front-end staff",
                "clientId": 1283,
                "clientName": "SFCU",
                "amount": 12000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 2,
                "invoiceName": "Plastics Enhancements",
                "invoiceDate": "2015-02-03",
                "description": "Enhancements to the plastics low-stock notification processs",
                "clientId": 1,
                "clientName": "PSCU",
                "amount": 2800,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 3,
                "invoiceName": "Project 003",
                "invoiceDate": "2015-03-13",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 15000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 4,
                "invoiceName": "Project 004",
                "invoiceDate": "2015-04-22",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 3000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 5,
                "invoiceName": "Project 005",
                "invoiceDate": "2015-04-04",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 1500,
                "manager": "SKelley"
            },
            {
                "invoiceId": 6,
                "invoiceName": "Project 006",
                "invoiceDate": "2015-05-11",
                "description": "Some mock project description...",
                "clientId": 24500,
                "clientName": "GeneriCU",
                "amount": 12000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 7,
                "invoiceName": "Project 007",
                "invoiceDate": "2015-05-09",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 6500,
                "manager": "SKelley"
            },
            {
                "invoiceId": 8,
                "invoiceName": "Project 008",
                "invoiceDate": "2015-07-01",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 7000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 9,
                "invoiceName": "Project 009",
                "invoiceDate": "2015-08-12",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 32000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 10,
                "invoiceName": "Project 010",
                "invoiceDate": "2015-09-14",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 4000,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 11,
                "invoiceName": "Project 011",
                "invoiceDate": "2015-09-08",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 35000,
                "manager": "SKelley"
            },
            {
                "invoiceId": 12,
                "invoiceName": "Project 012",
                "invoiceDate": "2015-10-24",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 27500,
                "manager": "DSoldwedel"
            },
            {
                "invoiceId": 13,
                "invoiceName": "Project 013",
                "invoiceDate": "2015-10-31",
                "description": "Some mock project description...",
                "clientId": 1234,
                "clientName": "GeneriCU",
                "amount": 6800,
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

        // simple example
        //$httpBackend.when('GET', 'views/blah.html').respond("<h1>BLAH</h1>");

        // Pass through templates and views (remember this is a regex)
        $httpBackend.whenGET(/^\/templates\//).passThrough();
        $httpBackend.whenGET(/^\/views\//).passThrough();

        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();


    })
}());
