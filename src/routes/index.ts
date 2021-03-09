import express from "express";
import PingController from "../controllers/ping";
import ClientRouter from "./client.router";
import RouteRouter from './routes.router';
import CO2Router from './co2.router';

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/client", ClientRouter);
router.use("/route", RouteRouter);
router.use("/co2", CO2Router);

export default router;