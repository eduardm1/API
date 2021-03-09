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
exports.getUser = exports.createUser = exports.getClients = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
const getClients = () => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = typeorm_1.getRepository(models_1.Client);
    // console.log(userRepository.metadata);
    console.log(yield userRepository.createQueryBuilder().select().from('Client', 'client').getMany());
    return userRepository.find();
});
exports.getClients = getClients;
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = typeorm_1.getRepository(models_1.Client);
    const user = new models_1.Client();
    return userRepository.save(Object.assign(Object.assign({}, user), payload));
});
exports.createUser = createUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = typeorm_1.getRepository(models_1.Client);
    const user = yield userRepository.findOne({ id: id });
    if (!user)
        return null;
    return user;
});
exports.getUser = getUser;
