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
exports.getComment = exports.createComment = exports.getComments = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
const getComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = typeorm_1.getRepository(models_1.Comment);
    return commentRepository.find();
});
exports.getComments = getComments;
const createComment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = typeorm_1.getRepository(models_1.Comment);
    const comment = new models_1.Comment();
    return commentRepository.save(Object.assign(Object.assign({}, comment), payload));
});
exports.createComment = createComment;
const getComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = typeorm_1.getRepository(models_1.Comment);
    const comment = yield commentRepository.findOne({ id: id });
    if (!comment)
        return null;
    return comment;
});
exports.getComment = getComment;
