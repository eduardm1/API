"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_client_1 = require("./client/get_client");
const post_client_1 = require("./client/post_client");
const delete_client_1 = require("./client/delete_client");
const get_co2_1 = require("./co2/get_co2");
const post_co2_1 = require("./co2/post_co2");
const delete_co2_1 = require("./co2/delete_co2");
const client_1 = require("@prisma/client");
const get_route_1 = require("./route/get_route");
const post_route_1 = require("./route/post_route");
const delete_route_1 = require("./route/delete_route");
globalThis.prisma = new client_1.PrismaClient();
describe('Run client tests', () => {
    //Client 
    post_client_1.postClient();
    get_client_1.getClient();
    delete_client_1.deleteClient();
});
describe('CO2 tests', () => {
    //CO2
    post_co2_1.postCo2();
    // await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
    get_co2_1.getCo2();
    delete_co2_1.deleteCo2();
});
describe("Route tests", () => {
    post_route_1.postRoute();
    get_route_1.getRoute();
    delete_route_1.deleteRoute();
});
globalThis.prisma.$disconnect;
