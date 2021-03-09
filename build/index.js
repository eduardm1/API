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
if (process.env.NODE_ENV !== 'production') {
    dotenv_1.default.config();
    console.log('configured');
}
const PORT = process.env.PORT || 8000;
const app = express_1.default();
app.use(express_1.default.json());
app.use(morgan_1.default('tiny'));
app.use(express_1.default.static("public"));
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}));
app.use(routes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
