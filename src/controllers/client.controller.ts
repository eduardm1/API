import { Client, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
  getClients,
  createClient,
  getClient,
  deleteClient,
  updateClient
} from "../repositories/client.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("client")
@Tags("Client")
export default class ClientController {


  @Get("/")
  public async getClients(@Query() offset: number, @Query() limit: number): Promise<Client[]> {
    return await getClients(offset, limit);
  }

  @Post("/")
  public async createClient(@Body() body: Client): Promise<Client> {
    return await createClient(body);
  }

  @Put("/")
  public async updateClient(@Body() body: Client): Promise<Client> {
    return await updateClient(body);
  }

  @Get("/:clientCode")
  public async getClient(@Path() clientCode: string): Promise<Client | null> {
    return await getClient(clientCode);
  }

  @Delete("/:clientCode")
 public async deleteClient (clientCode: string): Promise<Client| null>  {
    return await deleteClient(clientCode);
  }
}
