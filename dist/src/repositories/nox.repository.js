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
exports.deleteNox = exports.getNox = exports.updateNox = exports.createNox = exports.getNoxs = void 0;
const getNoxs = (offset, limit) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(userRepository.metadata);
    return yield globalThis.prisma.nOX.findMany({
        skip: offset,
        take: limit
    });
});
exports.getNoxs = getNoxs;
const createNox = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.nOX.create({
        data: Object.assign({}, payload)
    });
});
exports.createNox = createNox;
const updateNox = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.nOX.update({
        where: {
            transporttype_intervalweight_teu: {
                intervalweight: payload.intervalweight,
                teu: payload.teu,
                transporttype: payload.transporttype
            }
        },
        data: Object.assign({}, payload)
    });
});
exports.updateNox = updateNox;
const getNox = (intervalweight, teu, transporttype) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.nOX.findUnique({
        where: {
            transporttype_intervalweight_teu: {
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    });
});
exports.getNox = getNox;
const deleteNox = (intervalweight, teu, transporttype) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.nOX.delete({
        where: {
            transporttype_intervalweight_teu: {
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    });
});
exports.deleteNox = deleteNox;
