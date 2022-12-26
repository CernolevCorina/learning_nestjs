import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() payload ) {
    return this.usersService.create(payload);
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() payload ) {
    return this.usersService.update(id, payload);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
