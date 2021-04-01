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
const co2_controller_1 = require("../controllers/co2.controller");
const router = express_1.default.Router();
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new co2_controller_1.CO2Controller();
        const response = yield controller.getCo2s(Number(_req.query.offset), Number(_req.query.limit));
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: "No CO2 found" });
    }
}));
router.get("/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new co2_controller_1.CO2Controller();
        const response = yield controller.getCo2(String(req.query.fe), String(req.query.intervalweight), String(req.query.teu), String(req.query.transporttype));
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        console.log("ERRR", err);
        res.status(404).send({ message: err });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new co2_controller_1.CO2Controller();
        const response = yield controller.createCo2(req.body);
        res.setHeader("Content-type", "application/json");
        return res.send(response);
    }
    catch (error) {
        res.status(404).send({ message: error });
    }
}));
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new co2_controller_1.CO2Controller();
        const response = yield controller.updateCo2(req.body);
        res.setHeader("Content-type", "application/json");
        return res.send(response);
    }
    catch (error) {
        res.status(404).send({ message: error });
    }
}));
router.delete("/query", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new co2_controller_1.CO2Controller();
        const response = yield controller.deleteCo2(String(req.query.fe), String(req.query.intervalweight), String(req.query.teu), String(req.query.transporttype));
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (error) {
        res.status(404).send({ message: error });
    }
}));
exports.default = router;
