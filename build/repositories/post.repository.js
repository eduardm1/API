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
exports.getPost = exports.createPost = exports.getPosts = void 0;
const typeorm_1 = require("typeorm");
const models_1 = require("../models");
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const postRepository = typeorm_1.getRepository(models_1.Post);
    return postRepository.find();
});
exports.getPosts = getPosts;
const createPost = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const postRepository = typeorm_1.getRepository(models_1.Post);
    const post = new models_1.Post();
    return postRepository.save(Object.assign(Object.assign({}, post), payload));
});
exports.createPost = createPost;
const getPost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const postRepository = typeorm_1.getRepository(models_1.Post);
    const post = yield postRepository.findOne({ id: id });
    if (!post)
        return null;
    return post;
});
exports.getPost = getPost;
