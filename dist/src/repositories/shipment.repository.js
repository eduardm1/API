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
exports.deleteShipment = exports.updateShipment = exports.createShipment = exports.getShipments = void 0;
//get all the clients from the database.
const getShipments = (offset, limit, shipmentId) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(userRepository.metadata);
    shipmentId = shipmentId || undefined;
    return yield globalThis.prisma.shipment.findMany({
        skip: offset,
        take: limit,
        where: {
            shipmentid: shipmentId
        }
    });
});
exports.getShipments = getShipments;
//create a client in the database based on the body of the POST request
const createShipment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.shipment.create({
        data: payload
    });
});
exports.createShipment = createShipment;
const updateShipment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.shipment.update({
        where: {
            shipmentid: payload.shipmentid
        },
        data: payload
    });
});
exports.updateShipment = updateShipment;
const deleteShipment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield globalThis.prisma.shipment.delete({
        where: {
            shipmentid: id
        }
    });
});
exports.deleteShipment = deleteShipment;
