import express, {Application} from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import dotEnv from 'dotenv';

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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

