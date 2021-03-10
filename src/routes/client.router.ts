import express from "express";
import ClientController from "../controllers/client.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  const controller = new ClientController();
  const response = await controller.getClients();
  return res.send(response);
});

router.post("/", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.createClient(req.body);
  
  return res.send(response);
});

router.get("/:clientCode", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.getClient(req.params.clientCode);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export default router;