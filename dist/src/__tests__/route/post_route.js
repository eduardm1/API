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
exports.postRoute = void 0;
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const routes_1 = __importDefault(require("../../routes"));
const postRoute = () => describe('Route test', () => {
    let app, server;
    beforeEach(done => {
        app = express_1.default();
        app.use(express_1.default.json());
        app.use(morgan_1.default('tiny'));
        app.use(express_1.default.static("public"));
        app.use(routes_1.default);
        server = http_1.default.createServer(app);
        server.listen(done);
    });
    afterEach((done) => {
        server.close(done);
    });
    it('should create one co2 & return it & return 200', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app)
            .post(`/route`)
            .set('Content-Type', 'application/json')
            .send({
            "routeid": "TestID",
            "modality": "TestModality",
            "fueltype": "TestFuelType",
            "TransportType": "TesttransportType"
        })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((res) => {
            try {
                expect(res.body).toMatchObject({
                    "routeid": "TestID",
                    "modality": "TestModality",
                    "fueltype": "TestFuelType",
                    "TransportType": "TesttransportType"
                });
            }
            catch (err) {
                err.message = `${err.message}`;
                throw err;
            }
            done();
        });
    }));
});
exports.postRoute = postRoute;
