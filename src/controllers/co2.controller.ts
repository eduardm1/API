import {  CO2Full } from "@prisma/client";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
 createCo2,
 getCo2,
 getCo2s,
 deleteCo2,
 updateCo2
} from "../repositories/co2.repository";

@Route("co2")
@Tags("CO2")
export default class CO2Controller {
  @Get("/")
  public async getCo2s(@Query() offset: number, @Query() limit: number): Promise<CO2Full[]> {
    return await getCo2s(offset, limit);
  }

  @Post("/")
  public async createCo2(@Body() body: CO2Full): Promise<CO2Full> {
    return await createCo2(body);
  }

  @Put("/")
  public async updateCo2(@Body() body: CO2Full): Promise<CO2Full> {
    return await updateCo2(body);
  }

  @Get("/query")
  public async getCo2(@Query() fe: string, @Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<CO2Full | null> {
    return await getCo2(fe, intervalweight, teu, transporttype);
  }

  @Delete('/:fe/:intervalweight/:teu/:transporttype')
  public async deleteCo2(fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full| null> {
    return await deleteCo2(fe, intervalweight, teu, transporttype)
  }
}