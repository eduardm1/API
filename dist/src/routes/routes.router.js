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
const route_controller_1 = require("../controllers/route.controller");
const router = express_1.default.Router();
router.get("/:routeId?", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new route_controller_1.RouteController();
        const response = yield controller.getRoutes(Number(_req.query.offset), Number(_req.query.limit), _req.params.routeId);
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: err });
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new route_controller_1.RouteController();
        const response = yield controller.createRoute(req.body);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: err });
    }
}));
router.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new route_controller_1.RouteController();
        const response = yield controller.updateRoute(req.body);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: err });
    }
}));
router.delete("/:routeId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new route_controller_1.RouteController();
        const response = yield controller.deleteRoute(req.params.routeId);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (error) {
        res.status(404).send({ message: error });
    }
}));
exports.default = router;
