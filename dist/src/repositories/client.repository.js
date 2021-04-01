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
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClients = void 0;
//get all the clients from the database.
const getClients = (offset, limit, client) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(userRepository.metadata);
    return yield globalThis.prisma.client.findMany({
        skip: offset,
        take: limit,
        where: {
            clientcode: client
        }
    });
});
exports.getClients = getClients;
//create a client in the database based on the body of the POST request
const createClient = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.client.create({
        data: payload
    });
});
exports.createClient = createClient;
const updateClient = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.client.update({
        where: {
            clientcode: payload.clientcode
        },
        data: payload
    });
});
exports.updateClient = updateClient;
const deleteClient = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.client.delete({
        where: {
            clientcode: id
        }
    });
});
exports.deleteClient = deleteClient;
