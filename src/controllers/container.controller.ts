import { Container, Prisma } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
  createContainer,
  deleteContainer,
  getContainers,
  updateContainer
} from "../repositories/container.repository";
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("container")
@Tags("Container")
export default class ContainerController {


  @Get("/:containerId?")
  public async getContainers(@Query() offset: number, @Query() limit: number, @Path() containerType: string | undefined): Promise<Container[]> {
    return await getContainers(offset, limit, containerType);
  }

  @Post("/")
  public async createContainer(@Body() body: Container): Promise<Container> {
    return await createContainer(body);
  }

  @Put("/")
  public async updateContainer(@Body() body: Container): Promise<Container> {
    return await updateContainer(body);
  }

  @Delete("/:containerType")
 public async deleteContainer (containerType: string): Promise<Container| null>  {
    return await deleteContainer(containerType);
  }
}
