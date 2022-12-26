import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { NationalityService } from "modules/nationalities/nationality.service";
import { NationalitiesController } from "modules/nationalities/nationality.controller";
import { Nationality } from "modules/nationalities/entities/nationality.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Nationality])],
  providers: [NationalityService],
  controllers: [NationalitiesController],
})

export class NationalityModule {}