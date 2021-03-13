import {  CO2Full } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete } from "tsoa";
import {
 createCo2,
 getCo2,
 getCo2s,
 deleteCo2
} from "../repositories/co2.repository";

@Route("co2")
@Tags("CO2")
export default class CO2Controller {
  @Get("/")
  public async getCo2s(): Promise<CO2Full[]> {
    return await getCo2s();
  }

  @Post("/")
  public async createCo2(@Body() body: CO2Full): Promise<CO2Full> {
    return await createCo2(body);
  }

  @Get("/:fe/:intervalweight/:teu/:transporttype")
  public async getCo2(@Path() fe: string, @Path() intervalweight: string, @Path() teu: string, @Path() transporttype: string): Promise<CO2Full | null> {
    return await getCo2(fe, intervalweight, teu, transporttype);
  }

  @Delete('/:fe/:intervalweight/:teu/:transporttype')
  public async deleteCo2(fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full| null> {
    return await deleteCo2(fe, intervalweight, teu, transporttype)
  }
}