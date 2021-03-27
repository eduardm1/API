import express from "express";
import ClientRouter from "./client.router";
import RouteRouter from './routes.router';
import CO2Router from './co2.router';
import NoxRouter from './nox.router';

//Instantiate the router 
const router = express.Router();

// Set up the localhost:8000/client
router.use("/client", ClientRouter)
router.use("/route", RouteRouter);
router.use("/co2", CO2Router);
router.use("/nox", NoxRouter);

//Export the router that then can be used in the ../index.ts
export default router;