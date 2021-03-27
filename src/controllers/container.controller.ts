import { Container, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
  createContainer,
  deleteContainer,
  getContainer,
  getContainers,
  updateContainer
} from "../repositories/container.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("container")
@Tags("Container")
export default class ContainerController {


  @Get("/")
  public async getContainers(@Query() offset: number, @Query() limit: number): Promise<Container[]> {
    return await getContainers(offset, limit);
  }

  @Post("/")
  public async createContainer(@Body() body: Container): Promise<Container> {
    return await createContainer(body);
  }

  @Put("/")
  public async updateContainer(@Body() body: Container): Promise<Container> {
    return await updateContainer(body);
  }

  @Get("/:containerType")
  public async getContainer(@Path() containerType: string): Promise<Container | null> {
    return await getContainer(containerType);
  }

  @Delete("/:containerType")
 public async deleteContainer (containerType: string): Promise<Container| null>  {
    return await deleteContainer(containerType);
  }
}
