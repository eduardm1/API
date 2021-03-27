import express from "express";
import NoxController from "../controllers/nox.controller";

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const controller = new NoxController();
    const response = await controller.getNoxs(Number(_req.query.offset), Number(_req.query.limit));
    return res.send(response);
  } 
  catch(err) {
  res.status(404).send({ message: "No CO2 found" });
  }
});

router.get("/", async (req, res) => {
  try {
    const controller = new NoxController();
    const response = await controller.getNox( String(req.query.intervalweight),String(req.query.teu), String(req.query.transporttype));
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
     const controller = new NoxController();
     const response = await controller.createNox(req.body);
     res.setHeader("Content-type", "application/json")
     return res.send(response);
  } catch(error) {
     res.status(404).send({ message: error });
  }
 });

 router.put("/", async (req, res) => {
  try {
     const controller = new NoxController();
     const response = await controller.updateNox(req.body);
     res.setHeader("Content-type", "application/json")
     return res.send(response);
  } catch(error) {
     res.status(404).send({ message: error });
  }
 });

router.delete("/:fe/:intervalweight/:teu/:transporttype", async (req, res) => {
  try {
    const controller = new NoxController();
    const response = await controller.deleteNox( String(req.query.intervalweight),String(req.query.teu), String(req.query.transporttype));
    res.setHeader('Content-Type', 'application/json');

    return res.send(response);
  }
  catch(error) {
    res.status(404).send({ message: error });
  }
});

export default router;