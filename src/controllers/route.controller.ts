import { Prisma, Routes } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete } from "tsoa";
import {
 getRoute,
 createRoute,
  getRoutes,
 deleteRoute
} from "../repositories/route.repository";

@Route("Route")
@Tags("Route")
export default class RouteController {
  @Get("/")
  public async getRoutes(): Promise<Routes[]> {
    return getRoutes();
  }

  @Post("/")
  public async createRoute(@Body() body: Routes): Promise<Routes> {
    return createRoute(body);
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