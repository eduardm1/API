import express from "express";
import ShipmentController from "../controllers/shipment.controller";

const router = express.Router();

//set up the localhost:8000/client/ for a GET request
router.get("/:shipmentId?", async (_req, res) => {
  try {
    const controller = new ShipmentController();
    const response = await controller.getShipments(Number(_req.query.offset), Number(_req.query.limit), Number(_req.params.shipmentId));
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch (err)
  {
    console.log( err)
    res.status(404).send({message: "No shipments were found."})
  }

});

//set up the localhost:8000/client/ for a POST request
router.post("/", async (req, res) => {
  try {
    const controller = new ShipmentController();
    const response = await controller.createShipment(req.body);
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body)
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No shipment  was created"})
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const controller = new ShipmentController();
    const response = await controller.deleteShipment(Number(req.params.id)) ;
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);

  } catch (err)
  {
    console.log(err);
    res.status(404).send({message: "No client found"});
  }
})

router.put("/", async (req, res) => {
  try {
    const controller = new ShipmentController();
    const response = await controller.updateShipment(req.body);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No shipment was updated"})
  }
});

export default router;