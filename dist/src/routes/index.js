"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_router_1 = __importDefault(require("./client.router"));
const routes_router_1 = __importDefault(require("./routes.router"));
const co2_router_1 = __importDefault(require("./co2.router"));
const nox_router_1 = __importDefault(require("./nox.router"));
const container_router_1 = __importDefault(require("./container.router"));
const shipment_router_1 = __importDefault(require("./shipment.router"));
//Instantiate the router 
const router = express_1.default.Router();
// Set up the localhost:8000/client
router.use("/client", client_router_1.default);
router.use("/route", routes_router_1.default);
router.use("/co2", co2_router_1.default);
router.use("/nox", nox_router_1.default);
router.use("/container", container_router_1.default);
router.use("/shipment", shipment_router_1.default);
//Export the router that then can be used in the ../index.ts
exports.default = router;
