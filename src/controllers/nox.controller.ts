import { Get, Route, Tags, Post, Body, Path, Delete, Query, Put, Controller  } from "tsoa";
import {
 createNox,
 deleteNox,
 getNox,
 getNoxs,
 updateNox
} from "../repositories/nox.repository";
import {NOXModel} from '../models/model'

@Route("nox")
@Tags("Nox")
export class NoxController extends Controller  {
  @Get("/")
  public async getNoxs(@Query() offset: number, @Query() limit: number): Promise<NOXModel[]> {
    return await getNoxs(offset, limit);
  }

  @Post("/")
  public async createNox(@Body() body: NOXModel): Promise<NOXModel> {
    return await createNox(body);
  }

  @Put("/")
  public async updateNox(@Body() body: NOXModel): Promise<NOXModel> {
    return await updateNox(body);
  }

  @Get("/query")
  public async getNox(@Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<NOXModel | null> {
    return await getNox( intervalweight, teu, transporttype);
  }

  @Delete('/query')
  public async deleteNox(@Query() intervalweight: string, @Query() teu: string, @Query() transporttype: string): Promise<NOXModel| null> {
    return await deleteNox( intervalweight, teu, transporttype)
  }
}