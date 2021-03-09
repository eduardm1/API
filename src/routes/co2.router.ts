import express from "express";
import Co2Controller from "../controllers/co2.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new Co2Controller();
  const response = await controller.getCo2s();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new Co2Controller();
  const response = await controller.createCo2(req.body);
  
  return res.send(response);
});

router.get("/:fe/:intervalweight/:teu/:transporttype", async (req, res) => {
  const controller = new Co2Controller();
  const response = await controller.getCo2(req.params.fe, req.params.intervalweight, req.params.teu, req.params.transporttype);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export default router;