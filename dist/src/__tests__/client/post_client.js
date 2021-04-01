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
exports.postClient = void 0;
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const http_1 = __importDefault(require("http"));
const routes_1 = __importDefault(require("../../routes"));
// import Server from '../../server'
const postClient = () => describe('Client test', () => {
    let app, server;
    beforeEach((done) => __awaiter(void 0, void 0, void 0, function* () {
        app = express_1.default();
        app.use(express_1.default.json());
        app.use(morgan_1.default('tiny'));
        app.use(express_1.default.static("public"));
        app.use(routes_1.default);
        server = http_1.default.createServer(app);
        server.listen(done);
    }));
    afterEach((done) => __awaiter(void 0, void 0, void 0, function* () {
        server.close(done);
    }));
    it('should create one client & return it & return 200', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(server)
            .post(`/client`)
            .send({
            "clientcode": "TestClient",
            "street": "testStreet",
            "city": "testCity",
            "pob": "TestPob",
            "zipcode": "TestZipcode",
            "pobzipcode": "TestPobZipCode",
            "longitude": "123",
            "latitude": "123",
            "country": "TestCountry",
            "clientname": "TestclientName"
        })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((res) => {
            try {
                expect(res.body).toMatchObject({
                    "clientcode": "TestClient",
                    "street": "testStreet",
                    "city": "testCity",
                    "pob": "TestPob",
                    "zipcode": "TestZipcode",
                    "pobzipcode": "TestPobZipCode",
                    "longitude": "123",
                    "latitude": "123",
                    "country": "TestCountry",
                    "clientname": "TestclientName"
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
exports.postClient = postClient;
