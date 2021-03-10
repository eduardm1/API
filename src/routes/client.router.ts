import express from "express";
import ClientController from "../controllers/client.controller";

const router = express.Router();

//set up the localhost:8000/client/ for a GET request
router.get("/", async (_req, res) => {
  const controller = new ClientController();
  const response = await controller.getClients();
  return res.send(response);
});

//set up the localhost:8000/client/ for a POST request
router.post("/", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.createClient(req.body);
  
  return res.send(response);
});

/**
 * set up the localhost:8000/client/:client for a GET request based on the URL parameter
 */
router.get("/:clientCode", async (req, res) => {
  const controller = new ClientController();
  const response = await controller.getClient(req.params.clientCode);
  if (!response) res.status(404).send({ message: "No user found" });
  return res.send(response);
});

export default router;