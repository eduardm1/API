import express from "express";
import ContainerController from "../controllers/container.controller";

const router = express.Router();

//set up the localhost:8000/client/ for a GET request
router.get("/", async (_req, res) => {
  try {
    const controller = new ContainerController();
    const response = await controller.getContainers(Number(_req.query.offset), Number(_req.query.limit));

    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch(err) {
    res.status(404).send({message: "No containers were found."})
  }

});

//set up the localhost:8000/client/ for a POST request
router.post("/", async (req, res) => {
  try {
    const controller = new ContainerController();
    const response = await controller.createContainer(req.body);
    res.setHeader('Content-Type', 'application/json');
    console.log(req.body)
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No container  was created"})
  }
});

/**
 * set up the localhost:8000/client/:client for a GET request based on the URL parameter
 */
router.get("/:clientCode", async (req, res) => {
  try {
    const controller = new ContainerController();
    const response = await controller.getContainer(req.params.clientCode);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  } catch (err)
  {
    console.log(err);
    res.status(404).send({ message: "No client found" });
  }
});

router.delete("/:containerType", async (req, res) => {
  try {
    const controller = new ContainerController();
    const response = await controller.deleteContainer(req.params.containerType) ;
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
    const controller = new ContainerController();
    const response = await controller.updateContainer(req.body);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);
  }
  catch(err) {
    
    res.status(404).send({message: "No container  was created"})
  }
});

export default router;