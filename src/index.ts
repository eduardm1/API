import express, {Application} from 'express';
import morgan from 'morgan';
import { createConnection } from "typeorm";
import swaggerUI from 'swagger-ui-express';
import dotEnv from 'dotenv';

import dbConfig from './config/database';
import Router from './routes/';

if (process.env.NODE_ENV !== 'production') {
    dotEnv.config();
    console.log('configured');
}

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json"
        }
    })
);

app.use(Router);

createConnection(dbConfig).then((_connection) => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
})
.catch((err) => {
    console.log(`Unable to connect to db ${err}`);
    process.exit(1);
})
