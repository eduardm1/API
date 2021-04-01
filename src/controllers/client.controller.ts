import { Client, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
  getClients,
  createClient,
  deleteClient,
  updateClient
} from "../repositories/client.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("client")
@Tags("Client")
export default class ClientController {


  @Get("/:clientCode?")
  public async getClients(@Query() offset: number, @Query() limit: number, @Path() clientCode: string | undefined): Promise<Client[]> {
    return await getClients(offset, limit, clientCode);
  }

  @Post("/")
  public async createClient(@Body() body: Client): Promise<Client> {
    return await createClient(body);
  }

  @Put("/")
  public async updateClient(@Body() body: Client): Promise<Client> {
    return await updateClient(body);
  }


  @Delete("/:clientCode")
 public async deleteClient (clientCode: string): Promise<Client| null>  {
    return await deleteClient(clientCode);
  }
}
