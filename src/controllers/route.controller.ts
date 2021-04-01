import {RoutesModel} from '../models/model'
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller  } from "tsoa";
import {
 createRoute,
  getRoutes,
 deleteRoute,
 updateRoute
} from "../repositories/route.repository";

@Route("Route")
@Tags("Route")
export class RouteController extends Controller 
{
  
  @Get("/:routeId?")
  public async getRoutes(@Query() offset: number, @Query() limit: number, @Path() routeId: string): Promise<RoutesModel[]> {
    return getRoutes(offset, limit, routeId);
  }

  @Post("/")
  public async createRoute(@Body() body: RoutesModel): Promise<RoutesModel> {
    return createRoute(body);
  }

  @Put("/")
  public async updateRoute(@Body() body: RoutesModel): Promise<RoutesModel> {
    return updateRoute(body);
  }

    @Delete('/:routeId')
  public async deleteRoute(@Path() routeId: string): Promise<RoutesModel| null> {
    return deleteRoute(routeId);
  }

}