import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller } from "tsoa";
import {
  createContainer,
  deleteContainer,
  getContainers,
  updateContainer
} from "../repositories/container.repository";
import {ContainerModel} from '../models/model'
/**
 * The controller class is used to control the SwaggerUI
 */
@Route("container")
@Tags("Container")
export class ContainerController extends Controller {


  @Get("/:containerType?")
  public async getContainers(@Query() offset: number, @Query() limit: number, @Path() containerType: string): Promise<ContainerModel[]> {
    return await getContainers(offset, limit, containerType);
  }

  @Post("/")
  public async createContainer(@Body() body: ContainerModel): Promise<ContainerModel> {
    return await createContainer(body);
  }

  @Put("/")
  public async updateContainer(@Body() body: ContainerModel): Promise<ContainerModel> {
    return await updateContainer(body);
  }

  @Delete("/:containerType")
 public async deleteContainer (containerType: string): Promise<ContainerModel| null>  {
    return await deleteContainer(containerType);
  }
}
