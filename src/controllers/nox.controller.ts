import {  NOX } from "@prisma/client";
import { create } from "node:domain";
import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put } from "tsoa";
import {
 createNox,
 deleteNox,
 getNox,
 getNoxs,
 updateNox
} from "../repositories/nox.repository";

@Route("co2")
@Tags("CO2")
export default class CO2Controller {
  @Get("/")
  public async getNoxs(@Query() offset: number, @Query() limit: number): Promise<NOX[]> {
    return await getNoxs(offset, limit);
  }

  @Post("/")
  public async createNox(@Body() body: NOX): Promise<NOX> {
    return await createNox(body);
  }

  @Put("/")
  public async updateNox(@Body() body: NOX): Promise<NOX> {
    return await updateNox(body);
  }

  @Get("/query")
  public async getNox(@Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<NOX | null> {
    return await getNox( intervalweight, teu, transporttype);
  }

  @Delete('/:fe/:intervalweight/:teu/:transporttype')
  public async deleteNox( intervalweight: string, teu: string, transporttype: string): Promise<NOX| null> {
    return await deleteNox( intervalweight, teu, transporttype)
  }
}