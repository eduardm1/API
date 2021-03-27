import express from "express";
import ClientController from "../controllers/client.controller";

const router = express.Router();

//set up the localhost:8000/client/ for a GET request
router.get("/", async (_req, res) => {
  try {
    const controller = new ClientController();
    const response = await controller.getClients(Number(_req.query.offset), Number(_req.query.limit));

    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch(err) {
    res.status(404).send({message: "No clients were found."})
  }

});

//set up the localhost:8000/client/ for a POST request
router.post("/", async (req, res) => {
  try {
    const controller = new ClientController();
    const response = await controller.createClient(req.body);
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body)
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No client  was created"})
  }
});

/**
 * set up the localhost:8000/client/:client for a GET request based on the URL parameter
 */
router.get("/:clientCode", async (req, res) => {
  try {
    const controller = new ClientController();
    const response = await controller.getClient(req.params.clientCode);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  } catch (err)
  {
    console.log(err);
    res.status(404).send({ message: "No client found" });
  }
});

router.delete("/:clientCode", async (req, res) => {
  try {
    const controller = new ClientController();
    const response = await controller.deleteClient(req.params.clientCode) ;
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
    const controller = new ClientController();
    const response = await controller.updateClient(req.body);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No client  was created"})
  }
});

export default router;