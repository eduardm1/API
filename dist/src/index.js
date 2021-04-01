"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/"));
const client_1 = require(".prisma/client");
/**
* If the NODE_ENV is not production, it will use everything from the .env
*/
dotenv_1.default.config();
const PORT = process.env.PORT || 8000;
//Instantiate the express server. 
const app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default('tiny'));
app.use(express_1.default.static("public"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
//Create the route for the swaggerUI
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}));
//Set up the routes defined in /routes/index.ts
app.use(routes_1.default);
//Start the server on port ${PORT}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
globalThis.prisma = new client_1.PrismaClient();
