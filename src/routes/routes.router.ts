import express from "express";
import RouteController from "../controllers/route.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new RouteController();
  const response = await controller.getRoutes();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new RouteController();
  const response = await controller.createRoute(req.body);
  
  return res.send(response);
});

router.get("/:routeId", async (req, res) => {
  const controller = new RouteController();
  const response = await controller.getRoute(req.params.routeId);
  if (!response) res.status(404).send({ message: "No route found" });
  return res.send(response);
});

export default router;