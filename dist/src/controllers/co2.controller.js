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
exports.CO2Controller = void 0;
const tsoa_1 = require("tsoa");
const co2_repository_1 = require("../repositories/co2.repository");
let CO2Controller = class CO2Controller extends tsoa_1.Controller {
    getCo2s(offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield co2_repository_1.getCo2s(offset, limit);
        });
    }
    createCo2(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield co2_repository_1.createCo2(body);
        });
    }
    updateCo2(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield co2_repository_1.updateCo2(body);
        });
    }
    getCo2(fe, intervalweight, teu, transporttype) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield co2_repository_1.getCo2(fe, intervalweight, teu, transporttype);
        });
    }
    deleteCo2(fe, intervalweight, teu, transporttype) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield co2_repository_1.deleteCo2(fe, intervalweight, teu, transporttype);
        });
    }
};
__decorate([
    tsoa_1.Get("/"),
    __param(0, tsoa_1.Query()), __param(1, tsoa_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CO2Controller.prototype, "getCo2s", null);
__decorate([
    tsoa_1.Post("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CO2Controller.prototype, "createCo2", null);
__decorate([
    tsoa_1.Put("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CO2Controller.prototype, "updateCo2", null);
__decorate([
    tsoa_1.Get("/query"),
    __param(0, tsoa_1.Query()), __param(1, tsoa_1.Query()), __param(2, tsoa_1.Query()), __param(3, tsoa_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CO2Controller.prototype, "getCo2", null);
__decorate([
    tsoa_1.Delete('/query'),
    __param(0, tsoa_1.Query()), __param(1, tsoa_1.Query()), __param(2, tsoa_1.Query()), __param(3, tsoa_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], CO2Controller.prototype, "deleteCo2", null);
CO2Controller = __decorate([
    tsoa_1.Route("co2"),
    tsoa_1.Tags("CO2")
], CO2Controller);
exports.CO2Controller = CO2Controller;
