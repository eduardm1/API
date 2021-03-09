"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const typeorm_1 = require("typeorm");
let Client = class Client {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Client.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "clientcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "street", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "city", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "pob", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "zipcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "pobzipcode", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "longitutde", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "latitdue", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "country", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Client.prototype, "clientname", void 0);
Client = __decorate([
    typeorm_1.Entity({ schema: "ProjectSchema", database: "mod3_db_2" })
], Client);
exports.Client = Client;
