import { Shipment} from '@prisma/client'
import { ShipmentModel } from '../models/model'
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller  } from "tsoa";
import {
  createShipment,
  deleteShipment,
  getShipments,
  updateShipment
} from "../repositories/shipment.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("shipment")
@Tags("Shipment")
export class ShipmentController extends Controller {


  @Get("/:id?")
  public async getShipments(@Query() offset: number, @Query() limit: number, @Path() id: number): Promise<ShipmentModel[]> {
    return await getShipments(offset, limit, id);
  }

  @Post("/")
  public async createShipment(@Body() body: Shipment): Promise<ShipmentModel> {
    return await createShipment(body);
  }

  @Put("/")
  public async updateShipment(@Body() body: Shipment): Promise<ShipmentModel> {
    return await updateShipment(body);
  }

  @Delete("/:id")
 public async deleteShipment(id: number): Promise<ShipmentModel| null>  {
    return await deleteShipment(id);
  }
}
