import express, {Application, Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import dotEnv from 'dotenv';
    
import Router from './routes/';
    
 /**
 * If the NODE_ENV is not production, it will use everything from the .env
 */
if (process.env.NODE_ENV !== 'production') {
    dotEnv.config();
}
const PORT = process.env.PORT || 8000;
    
//Instantiate the express server. 
const app: Application = express();
    
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static("public"));
    
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
       
    //Create the route for the swaggerUI
app.use(
    "/docs",
    swaggerUI.serve,
    swaggerUI.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json"
        }
        }));
    
    //Set up the routes defined in /routes/index.ts
    app.use(Router);
    
    //Start the server on port ${PORT}
 app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    