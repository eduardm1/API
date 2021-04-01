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
exports.RouteController = void 0;
const tsoa_1 = require("tsoa");
const route_repository_1 = require("../repositories/route.repository");
let RouteController = class RouteController extends tsoa_1.Controller {
    getRoutes(offset, limit, routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return route_repository_1.getRoutes(offset, limit, routeId);
        });
    }
    createRoute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return route_repository_1.createRoute(body);
        });
    }
    updateRoute(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return route_repository_1.updateRoute(body);
        });
    }
    deleteRoute(routeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return route_repository_1.deleteRoute(routeId);
        });
    }
};
__decorate([
    tsoa_1.Get("/:routeId?"),
    __param(0, tsoa_1.Query()), __param(1, tsoa_1.Query()), __param(2, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", Promise)
], RouteController.prototype, "getRoutes", null);
__decorate([
    tsoa_1.Post("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RouteController.prototype, "createRoute", null);
__decorate([
    tsoa_1.Put("/"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RouteController.prototype, "updateRoute", null);
__decorate([
    tsoa_1.Delete('/:routeId'),
    __param(0, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RouteController.prototype, "deleteRoute", null);
RouteController = __decorate([
    tsoa_1.Route("Route"),
    tsoa_1.Tags("Route")
], RouteController);
exports.RouteController = RouteController;
