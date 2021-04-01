"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = void 0;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const client_controller_1 = require("./../src/controllers/client.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const co2_controller_1 = require("./../src/controllers/co2.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const container_controller_1 = require("./../src/controllers/container.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const nox_controller_1 = require("./../src/controllers/nox.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const route_controller_1 = require("./../src/controllers/route.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const shipment_controller_1 = require("./../src/controllers/shipment.controller");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "PrismaClient": {
        "dataType": "refObject",
        "properties": {},
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CO2": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "teu": { "dataType": "double", "required": true }, "intervalweight": { "dataType": "string", "required": true }, "fe": { "dataType": "string", "required": true }, "transporttype": { "dataType": "string", "required": true }, "emissionsperkm": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Container": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "heightcontainer": { "dataType": "double", "required": true }, "widthcontainer": { "dataType": "double", "required": true }, "lengthcontainer": { "dataType": "double", "required": true }, "containertype": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "NOX": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "teu": { "dataType": "double", "required": true }, "intervalweight": { "dataType": "string", "required": true }, "transporttype": { "dataType": "string", "required": true }, "emissionsperkm": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Routes": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "TransportType": { "dataType": "string", "required": true }, "fueltype": { "dataType": "string", "required": true }, "modality": { "dataType": "string", "required": true }, "routeid": { "dataType": "string", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Shipment": {
        "dataType": "refAlias",
        "type": { "dataType": "nestedObjectLiteral", "nestedProperties": { "co2pershipment": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true }, "teu": { "dataType": "union", "subSchemas": [{ "dataType": "double" }, { "dataType": "enum", "enums": [null] }], "required": true }, "shipmentweight": { "dataType": "double", "required": true }, "transporttype": { "dataType": "string", "required": true }, "intervalweight": { "dataType": "union", "subSchemas": [{ "dataType": "string" }, { "dataType": "enum", "enums": [null] }], "required": true }, "containertype": { "dataType": "string", "required": true }, "toclient": { "dataType": "string", "required": true }, "fromclient": { "dataType": "string", "required": true }, "routeid": { "dataType": "string", "required": true }, "feto": { "dataType": "string", "required": true }, "fefrom": { "dataType": "string", "required": true }, "emissionprocessing": { "dataType": "double", "required": true }, "intervaldistance": { "dataType": "string", "required": true }, "distance": { "dataType": "double", "required": true }, "modality": { "dataType": "string", "required": true }, "date": { "dataType": "datetime", "required": true }, "sequencenumber": { "dataType": "double", "required": true }, "shipmentid": { "dataType": "double", "required": true } }, "validators": {} },
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/client/:clientCode?', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
            clientCode: { "in": "path", "name": "clientCode", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new client_controller_1.ClientController();
        const promise = controller.getClients.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/client', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "PrismaClient" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new client_controller_1.ClientController();
        const promise = controller.createClient.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/client', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "PrismaClient" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new client_controller_1.ClientController();
        const promise = controller.updateClient.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/client/:clientCode', function (request, response, next) {
        const args = {
            clientCode: { "in": "path", "name": "clientCode", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new client_controller_1.ClientController();
        const promise = controller.deleteClient.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/co2', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new co2_controller_1.CO2Controller();
        const promise = controller.getCo2s.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/co2', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "CO2" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new co2_controller_1.CO2Controller();
        const promise = controller.createCo2.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/co2', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "CO2" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new co2_controller_1.CO2Controller();
        const promise = controller.updateCo2.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/co2/query', function (request, response, next) {
        const args = {
            fe: { "in": "query", "name": "fe", "required": true, "dataType": "string" },
            intervalweight: { "in": "query", "name": "intervalweight", "required": true, "dataType": "string" },
            teu: { "in": "query", "name": "teu", "required": true, "dataType": "string" },
            transporttype: { "in": "query", "name": "transporttype", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new co2_controller_1.CO2Controller();
        const promise = controller.getCo2.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/co2/query', function (request, response, next) {
        const args = {
            fe: { "in": "query", "name": "fe", "required": true, "dataType": "string" },
            intervalweight: { "in": "query", "name": "intervalweight", "required": true, "dataType": "string" },
            teu: { "in": "query", "name": "teu", "required": true, "dataType": "string" },
            transporttype: { "in": "query", "name": "transporttype", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new co2_controller_1.CO2Controller();
        const promise = controller.deleteCo2.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/container/:containerType?', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
            containerType: { "in": "path", "name": "containerType", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new container_controller_1.ContainerController();
        const promise = controller.getContainers.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/container', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Container" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new container_controller_1.ContainerController();
        const promise = controller.createContainer.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/container', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Container" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new container_controller_1.ContainerController();
        const promise = controller.updateContainer.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/container/:containerType', function (request, response, next) {
        const args = {
            containerType: { "in": "path", "name": "containerType", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new container_controller_1.ContainerController();
        const promise = controller.deleteContainer.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/nox', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new nox_controller_1.NoxController();
        const promise = controller.getNoxs.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/nox', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "NOX" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new nox_controller_1.NoxController();
        const promise = controller.createNox.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/nox', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "NOX" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new nox_controller_1.NoxController();
        const promise = controller.updateNox.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/nox/query', function (request, response, next) {
        const args = {
            intervalweight: { "in": "query", "name": "intervalweight", "required": true, "dataType": "string" },
            teu: { "in": "query", "name": "teu", "required": true, "dataType": "string" },
            transporttype: { "in": "query", "name": "transporttype", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new nox_controller_1.NoxController();
        const promise = controller.getNox.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/nox/query', function (request, response, next) {
        const args = {
            intervalweight: { "in": "query", "name": "intervalweight", "required": true, "dataType": "string" },
            teu: { "in": "query", "name": "teu", "required": true, "dataType": "string" },
            transporttype: { "in": "query", "name": "transporttype", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new nox_controller_1.NoxController();
        const promise = controller.deleteNox.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/Route/:routeId?', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
            routeId: { "in": "path", "name": "routeId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new route_controller_1.RouteController();
        const promise = controller.getRoutes.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/Route', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Routes" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new route_controller_1.RouteController();
        const promise = controller.createRoute.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/Route', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Routes" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new route_controller_1.RouteController();
        const promise = controller.updateRoute.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/Route/:routeId', function (request, response, next) {
        const args = {
            routeId: { "in": "path", "name": "routeId", "required": true, "dataType": "string" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new route_controller_1.RouteController();
        const promise = controller.deleteRoute.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/shipment/:id?', function (request, response, next) {
        const args = {
            offset: { "in": "query", "name": "offset", "required": true, "dataType": "double" },
            limit: { "in": "query", "name": "limit", "required": true, "dataType": "double" },
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new shipment_controller_1.ShipmentController();
        const promise = controller.getShipments.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/shipment', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Shipment" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new shipment_controller_1.ShipmentController();
        const promise = controller.createShipment.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/shipment', function (request, response, next) {
        const args = {
            body: { "in": "body", "name": "body", "required": true, "ref": "Shipment" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new shipment_controller_1.ShipmentController();
        const promise = controller.updateShipment.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/shipment/:id', function (request, response, next) {
        const args = {
            id: { "in": "path", "name": "id", "required": true, "dataType": "double" },
        };
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        let validatedArgs = [];
        try {
            validatedArgs = getValidatedArgs(args, request, response);
        }
        catch (err) {
            return next(err);
        }
        const controller = new shipment_controller_1.ShipmentController();
        const promise = controller.deleteShipment.apply(controller, validatedArgs);
        promiseHandler(controller, promise, response, undefined, next);
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then((data) => {
            let statusCode = successStatus;
            let headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus();
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch((error) => next(error));
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers = {}) {
        Object.keys(headers).forEach((name) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        const fieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
exports.RegisterRoutes = RegisterRoutes;
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
