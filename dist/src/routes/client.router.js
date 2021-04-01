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
const client_controller_1 = require("../controllers/client.controller");
const router = express_1.default.Router();
//set up the localhost:8000/client/ for a GET request
router.get("/:clientCode?", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new client_controller_1.ClientController();
        const response = yield controller.getClients(Number(_req.query.offset), Number(_req.query.limit), _req.params.clientCode);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: err });
    }
}));
//set up the localhost:8000/client/ for a POST request
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new client_controller_1.ClientController();
        const response = yield controller.createClient(req.body);
        res.setHeader('Content-Type', 'application/json');
        console.log(req.body);
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: "No client  was created" });
    }
}));
router.delete("/:clientCode", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new client_controller_1.ClientController();
        const response = yield controller.deleteClient(req.params.clientCode);
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
        const controller = new client_controller_1.ClientController();
        const response = yield controller.updateClient(req.body);
        res.setHeader('Content-Type', 'application/json');
        return res.send(response);
    }
    catch (err) {
        res.status(404).send({ message: "No client  was created" });
    }
}));
exports.default = router;
