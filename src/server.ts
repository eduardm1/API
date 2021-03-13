import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import dotEnv from 'dotenv';

import Router from './routes/';

/**
 * If the NODE_ENV is not production, it will use everything from the .env
 */
export default class Server {

    server: any;
     PORT = process.env.PORT || 8000;
    public app: Application = express();

    constructor() {
        if (process.env.NODE_ENV !== 'production') {
            dotEnv.config();
        }
       this.config();
    }
   
    private config(): void { 
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
           res.header('Access-Control-Allow-Headers', '*');
           next();
           });
           this.app.use(express.json());
        this.app.use(morgan('tiny'));
        this.app.use(express.static("public"));

        this.app.use(
            "/docs",
            swaggerUI.serve,
            swaggerUI.setup(undefined, {
                swaggerOptions: {
                    url: "/swagger.json"
                }
            })
        );
           
        this.app.use(Router);
    }
    
    start(): void {
       this.server =  this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }

    stop(): void {
        this.server.close();
    }
  
    
}