import {Body, Controller, Get, Param, Post, Put, Delete} from "@nestjs/common";
import { NationalityService } from "modules/nationalities/nationality.service";

@Controller('nationalities')
export class NationalitiesController {
  constructor(private readonly nationalityService: NationalityService) {}

  @Post('create')
  create(@Body() payload) {
    return this.nationalityService.create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() payload) {
    return this.nationalityService.update(id, payload);
  }

  @Get()
  findAll() {
    return this.nationalityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nationalityService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nationalityService.remove(id);
  }
}