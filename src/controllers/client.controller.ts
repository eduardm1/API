import { Client, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
  getClients,
  createUser,
  IUserPayload,
  getUser,
} from "../repositories/user.repository";

@Route("client")
@Tags("Client")
export default class UserController {
  @Get("/")
  public async getClients(): Promise<Client[]> {
    return getClients();
  }

  @Post("/")
  public async createUser(@Body() body: Client) {
    console.log(body);
    return createUser(body);
  }

  @Get("/:clientCode")
  public async getUser(@Path() clientCode: string): Promise<Client | null> {
    return getUser(clientCode);
  }
}