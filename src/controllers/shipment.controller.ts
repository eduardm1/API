import { Shipment, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
  createShipment,
  deleteShipment,
  getShipment,
  getShipments,
  updateShipment
} from "../repositories/shipment.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("shipment")
@Tags("Shipment")
export default class ShipmentController {


  @Get("/")
  public async getShipments(@Query() offset: number, @Query() limit: number): Promise<Shipment[]> {
    return await getShipments(offset, limit);
  }

  @Post("/")
  public async createShipment(@Body() body: Shipment): Promise<Shipment> {
    return await createShipment(body);
  }

  @Put("/")
  public async updateShipment(@Body() body: Shipment): Promise<Shipment> {
    return await updateShipment(body);
  }

  @Get("/:id")
  public async getShipment(@Path() id: number): Promise<Shipment | null> {
    return await getShipment(id);
  }

  @Delete("/:id")
 public async deleteShipment(id: number): Promise<Shipment| null>  {
    return await deleteShipment(id);
  }
}
