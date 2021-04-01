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
exports.deleteCo2 = exports.getCo2 = exports.updateCo2 = exports.createCo2 = exports.getCo2s = void 0;
const getCo2s = (offset, limit) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(userRepository.metadata);
    return yield globalThis.prisma.cO2.findMany({
        skip: offset,
        take: limit
    });
});
exports.getCo2s = getCo2s;
const createCo2 = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.cO2.create({
        data: Object.assign({}, payload)
    });
});
exports.createCo2 = createCo2;
const updateCo2 = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.cO2.update({
        where: {
            transporttype_fe_intervalweight_teu: {
                fe: payload.fe,
                intervalweight: payload.intervalweight,
                teu: payload.teu,
                transporttype: payload.transporttype
            }
        },
        data: Object.assign({}, payload)
    });
});
exports.updateCo2 = updateCo2;
const getCo2 = (fe, intervalweight, teu, transporttype) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.cO2.findUnique({
        where: {
            transporttype_fe_intervalweight_teu: {
                fe: fe,
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    });
});
exports.getCo2 = getCo2;
const deleteCo2 = (fe, intervalweight, teu, transporttype) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.cO2.delete({
        where: {
            transporttype_fe_intervalweight_teu: {
                fe: fe,
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    });
});
exports.deleteCo2 = deleteCo2;
