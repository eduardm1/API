import { Prisma, Routes } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
 getRoute,
 createRoute,
 getRoutes
} from "../repositories/route.repository";

@Route("Route")
@Tags("Route")
export default class RouteController {
  @Get("/")
  public async getRoutes(): Promise<Routes[]> {
    return getRoutes();
  }

  @Post("/")
  public async createRoute(@Body() body: Routes) {
    return createRoute(body);
  }

  @Get("/:routeId")
  public async getRoute(@Path() routeId: string): Promise<Routes | null> {
    return getRoute(routeId);
  }
}