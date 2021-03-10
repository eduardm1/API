import express from "express";
import ClientRouter from "./client.router";
import RouteRouter from './routes.router';
import CO2Router from './co2.router';

const router = express.Router();


router.use("/client", ClientRouter);
router.use("/route", RouteRouter);
router.use("/co2", CO2Router);

export default router;