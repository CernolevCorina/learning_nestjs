import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { UsersModule } from "modules/users/users.module";
import { NationalityModule } from "modules/nationalities/nationality.module";
import { ConfigDB } from 'config/db';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: ['.env']}),
    UsersModule,
    NationalityModule,
    // @ts-ignore
    TypeOrmModule.forRoot(ConfigDB())
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
