import { Prisma, Route } from "@prisma/client";
import { Get, Route as TsoaRoute, Tags, Post, Body, Path } from "tsoa";
import {
 getRoute,
 createRoute,
 getRoutes
} from "../repositories/route.repository";

@TsoaRoute("Route")
@Tags("Route")
export default class RouteController {
  @Get("/")
  public async getRoutes(): Promise<Route[]> {
    return getRoutes();
  }

  @Post("/")
  public async createRoute(@Body() body: Route) {
    return createRoute(body);
  }

  @Get("/:routeId")
  public async getRoute(@Path() routeId: string): Promise<Route | null> {
    return getRoute(routeId);
  }
}