"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "mod3-postgres.postgres.database.azure.com",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "mod3_team_2@mod3-postgres",
    password: process.env.POSTGRES_PASSWORD || "YcanqUvVVgR9YBVL",
    database: process.env.POSTGRES_DB || "mod3_db_2",
    ssl: true,
    entities: [models_1.User, models_1.Post, models_1.Comment],
    synchronize: true,
};
console.log(config.host);
exports.default = config;
