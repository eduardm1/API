"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipmentController = void 0;
const tsoa_1 = require("tsoa");
const shipment_repository_1 = require("../repositories/shipment.repository");
/**
 * The controller class is used to control the SwaggerUI
 */
let ShipmentController = class ShipmentController extends tsoa_1.Controller {
    getShipments(offset, limit, id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield shipment_repository_1.getShipments(offset, limit, id);
        });
    }
    createShipment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield shipment_repository_1.createShipment(body);
        });
    }
    updateShipment(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield shipment_repository_1.updateShipment(body);
        });
    }
    deleteShipment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield shipment_repository_1.deleteShipment(id);
        });
    }
};
__decorate([
    tsoa_1.Get("/:id?"),
    __param(0, tsoa_1.Query()), __param(1, tsoa_1.Query()), __param(2, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], ShipmentController.prototype, "getShipments", null);
__decorate([
    tsoa_1.Post("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShipmentController.prototype, "createShipment", null);
__decorate([
    tsoa_1.Put("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShipmentController.prototype, "updateShipment", null);
__decorate([
    tsoa_1.Delete("/:id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShipmentController.prototype, "deleteShipment", null);
ShipmentController = __decorate([
    tsoa_1.Route("shipment"),
    tsoa_1.Tags("Shipment")
], ShipmentController);
exports.ShipmentController = ShipmentController;
