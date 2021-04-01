"use strict";
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
exports.deleteRoute = exports.updateRoute = exports.createRoute = exports.getRoutes = void 0;
const getRoutes = (offset, limit, routeId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.routes.findMany({
        skip: offset,
        take: limit,
        where: {
            routeid: routeId
        }
    });
});
exports.getRoutes = getRoutes;
const createRoute = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.routes.create({
        data: payload
    });
});
exports.createRoute = createRoute;
const updateRoute = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.routes.update({
        where: {
            routeid: payload.routeid
        },
        data: payload
    });
});
exports.updateRoute = updateRoute;
const deleteRoute = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('id');
    return yield globalThis.prisma.routes.delete({
        where: {
            routeid: id
        }
    });
});
exports.deleteRoute = deleteRoute;
