import { Prisma, Routes } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
 getRoute,
 createRoute,
  getRoutes,
 deleteRoute,
 updateRoute
} from "../repositories/route.repository";

@Route("Route")
@Tags("Route")
export default class RouteController {
  @Get("/")
  public async getRoutes(@Query() offset: number, @Query() limit: number): Promise<Routes[]> {
    return getRoutes(offset, limit);
  }

  @Post("/")
  public async createRoute(@Body() body: Routes): Promise<Routes> {
    return createRoute(body);
  }

  @Put("/")
  public async updateRoute(@Body() body: Routes): Promise<Routes> {
    return updateRoute(body);
  }

  @Get("/:routeId")
  public async getRoute(@Path() routeId: string): Promise<Routes | null>
  {
    return getRoute(routeId);
  }

    @Delete('/:routeId')
  public async deleteRoute(@Path() routeId: string): Promise<Routes| null> {
    return deleteRoute(routeId);
  }

}