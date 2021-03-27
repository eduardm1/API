import express from "express";
import RouteController from "../controllers/route.controller";

const router = express.Router();

router.get("/", async (_req, res) =>
{
  try
  {
    const controller = new RouteController();
    const response = await controller.getRoutes();
    return res.send(response);
  }
  catch (err) {res.status(404).send({ message: err }); }

});



router.get("/:routeId", async (req, res) => {
  try
  {
    const controller = new RouteController();
    const response = await controller.getRoute(req.params.routeId);
    res.setHeader('Content-Type', 'application/json');
    return res.send(response);

  }
  catch (err) { res.status(404).send({ message: err }); }
});

router.post("/", async (req, res) =>
{
  try
  {
    const controller = new RouteController();
    const response = await controller.createRoute(req.body);
    res.setHeader('Content-Type', 'application/json');

    return res.send(response);
  }
  catch (err)
  {
    res.status(404).send({ message: err });
  }
 
});

router.delete("/:routeId", async (req, res) => {
  try
  {
    const controller = new RouteController();
    const response = await controller.deleteRoute(req.params.routeId);
    res.setHeader('Content-Type', 'application/json');

    return res.send(response);
  }
  catch(error) {
    res.status(404).send({ message: error });
  }
});

export default router;