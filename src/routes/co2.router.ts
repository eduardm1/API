import express from "express";
import { CO2Controller } from "../controllers/co2.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const controller = new CO2Controller();
    const response = await controller.getCo2s(Number(_req.query.offset), Number(_req.query.limit));
    return res.send(response);
  } 
  catch(err) {
  res.status(404).send({ message: "No CO2 found" });
  }
});

router.get("/query", async (req, res) => {
  try {
    const controller = new CO2Controller();
    const response = await controller.getCo2(String(req.query.fe), String(req.query.intervalweight),String(req.query.teu), String(req.query.transporttype));
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch (err)
  {
    console.log("ERRR", err);
    res.status(404).send({ message: err });
  }

});

router.post("/", async (req, res) => {
  try {
     const controller = new CO2Controller();
     const response = await controller.createCo2(req.body);
     res.setHeader("Content-type", "application/json")
     return res.send(response);
  } catch(error) {
     res.status(404).send({ message: error });
  }
 });

 router.put("/", async (req, res) => {
  try {
     const controller = new CO2Controller();
     const response = await controller.updateCo2(req.body);
     res.setHeader("Content-type", "application/json")
     return res.send(response);
  } catch(error) {
     res.status(404).send({ message: error });
  }
 });

router.delete("/query", async (req, res) => {
  try {
    const controller = new CO2Controller();
    const response = await controller.deleteCo2(String(req.query.fe), String(req.query.intervalweight),String(req.query.teu), String(req.query.transporttype));
    res.setHeader('Content-Type', 'application/json');

    return res.send(response);
  }
  catch(error) {
    res.status(404).send({ message: error });
  }
});

export default router;