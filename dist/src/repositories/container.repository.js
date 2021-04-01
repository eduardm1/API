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
exports.deleteContainer = exports.updateContainer = exports.createContainer = exports.getContainers = void 0;
//get all the clients from the database.
const getContainers = (offset, limit, containerType) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(userRepository.metadata);
    return yield globalThis.prisma.container.findMany({
        skip: offset,
        take: limit,
        where: {
            containertype: containerType
        }
    });
});
exports.getContainers = getContainers;
//create a client in the database based on the body of the POST request
const createContainer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.container.create({
        data: payload
    });
});
exports.createContainer = createContainer;
const updateContainer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.container.update({
        where: {
            containertype: payload.containertype
        },
        data: payload
    });
});
exports.updateContainer = updateContainer;
const deleteContainer = (containerType) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.container.delete({
        where: {
            containertype: containerType
        }
    });
});
exports.deleteContainer = deleteContainer;
