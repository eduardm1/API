import { Client, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
  getClients,
  createClient,
  getClient,
} from "../repositories/user.repository";

@Route("client")
@Tags("Client")
export default class ClientController {
  @Get("/")
  public async getClients(): Promise<Client[]> {
    return getClients();
  }

  @Post("/")
  public async createClient(@Body() body: Client) {
    console.log(body);
    return createClient(body);
  }

  @Get("/:clientCode")
  public async getClient(@Path() clientCode: string): Promise<Client | null> {
    return getClient(clientCode);
  }
}