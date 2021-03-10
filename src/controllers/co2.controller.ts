import {  CO2Full } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import {
 createCo2,
 getCo2,
 getCo2s
} from "../repositories/co2.repository";

@Route("co2")
@Tags("CO2")
export default class CO2Controller {
  @Get("/")
  public async getCo2s(): Promise<CO2Full[]> {
    return getCo2s();
  }

  @Post("/")
  public async createCo2(@Body() body: CO2Full) {
    return createCo2(body);
  }

  @Get("/:fe/:intervalweight/:teu/:transporttype")
  public async getCo2(@Path() fe: string, @Path() intervalweight: string, @Path() teu: string, @Path() transporttype: string): Promise<CO2Full | null> {
    return getCo2(fe, intervalweight, teu, transporttype);
  }
}