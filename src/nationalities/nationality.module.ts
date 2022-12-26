import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { NationalityService } from "./nationality.service";
import { NationalitiesController } from "./nationality.controller";
import { Nationality } from "./entities/nationality.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Nationality])],
  providers: [NationalityService],
  controllers: [NationalitiesController],
})

export class NationalityModule {}