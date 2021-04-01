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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shipment_controller_1 = require("../controllers/shipment.controller");
const router = express_1.default.Router();
//set up the localhost:8000/client/ for a GET request
router.get("/:shipmentId?", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new shipment_controller_1.ShipmentController();
        const response = yield controller.getShipments(Number(_req.query.offset), Number(_req.query.limit), Number(_req.params.shipmentId));
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ message: "No shipments were found." });
    }
}));
//set up the localhost:8000/client/ for a POST request
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new shipment_controller_1.ShipmentController();
        const response = yield controller.createShipment(req.body);
        res.setHeader('Content-Type', 'application/json');
        console.log(req.body);
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: "No shipment  was created" });
    }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new shipment_controller_1.ShipmentController();
        const response = yield controller.deleteShipment(Number(req.params.id));
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        console.log(err);
        res.status(404).send({ message: "No client found" });
    }
}));
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new shipment_controller_1.ShipmentController();
        const response = yield controller.updateShipment(req.body);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: "No shipment was updated" });
    }
}));
exports.default = router;
