import { ClientModel } from '../models/model'
import {Client} from '@prisma/client'
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller  } from "tsoa";
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
export class ClientController extends Controller  {


  @Get("/:clientCode?")
  public async getClients(@Query() offset: number, @Query() limit: number, @Path() clientCode: string): Promise<Client[]> {
    return await getClients(offset, limit, clientCode);
  }

  @Post("/")
  public async createClient(@Body() body: ClientModel): Promise<ClientModel> {
    return await createClient(body);
  }

  @Put("/")
  public async updateClient(@Body() body: ClientModel): Promise<ClientModel> {
    return await updateClient(body);
  }


  @Delete("/:clientCode")
 public async deleteClient (clientCode: string): Promise<ClientModel| null>  {
    return await deleteClient(clientCode);
  }
}
