import { Client, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete } from "tsoa";
import {
  getClients,
  createClient,
  getClient,
  deleteClient
} from "../repositories/client.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("client")
@Tags("Client")
export default class ClientController {


  @Get("/")
  public async getClients(): Promise<Client[]> {
    return await getClients();
  }

  @Post("/")
  public async createClient(@Body() body: Client): Promise<Client> {
    return await createClient(body);
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
