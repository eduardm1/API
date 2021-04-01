import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller  } from "tsoa";
import {
 createCo2,
 getCo2,
 getCo2s,
 deleteCo2,
 updateCo2
} from "../repositories/co2.repository";
import {CO2Model} from '../models/model'

@Route("co2")
@Tags("CO2")
export class CO2Controller extends Controller {
  @Get("/")
  public async getCo2s(@Query() offset: number, @Query() limit: number): Promise<CO2Model[]> {
    return await getCo2s(offset, limit);
  }

  @Post("/")
  public async createCo2(@Body() body: CO2Model): Promise<CO2Model> {
    return await createCo2(body);
  }

  @Put("/")
  public async updateCo2(@Body() body: CO2Model): Promise<CO2Model> {
    return await updateCo2(body);
  }

  @Get("/query")
  public async getCo2(@Query() fe: string, @Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<CO2Model | null> {
    return await getCo2(fe, intervalweight, teu, transporttype);
  }

  @Delete('/query')
  public async deleteCo2(@Query() fe: string, @Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<CO2Model| null> {
    return await deleteCo2(fe, intervalweight, teu, transporttype)
  }
}