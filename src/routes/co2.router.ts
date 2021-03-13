import express from "express";
import Co2Controller from "../controllers/co2.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const controller = new Co2Controller();
    const response = await controller.getCo2s();
    return res.send(response);
  } 
  catch(err) {
  res.status(404).send({ message: "No CO2 found" });
  }
});

router.post("/", async (req, res) => {
 try {
    const controller = new Co2Controller();
    const response = await controller.createCo2(req.body);
    res.setHeader("Content-type", "application/json")
    return res.send(response);
 } catch(error) {
    res.status(404).send({ message: error });
 }
});

router.get("/:fe/:intervalweight/:teu/:transporttype", async (req, res) => {
  try {
    const controller = new Co2Controller();
    const response = await controller.getCo2(req.params.fe, req.params.intervalweight, req.params.teu, req.params.transporttype);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch (err)
  {
    console.log("ERRR", err);
    res.status(404).send({ message: err });
  }

});

router.delete("/:fe/:intervalweight/:teu/:transporttype", async (req, res) => {
  try {
    const controller = new Co2Controller();
    const response = await controller.deleteCo2(req.params.fe, req.params.intervalweight, req.params.teu, req.params.transporttype);
    res.setHeader('Content-Type', 'application/json');

    return res.send(response);
  }
  catch(error) {
    res.status(404).send({ message: error });
  }
});

export default router;