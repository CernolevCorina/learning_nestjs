import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/entities/user.entity';
import { Nationality } from './nationalities/entities/nationality.entity';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from "./users/users.module";
import { NationalityModule } from "./nationalities/nationality.module";

@Module({
  imports: [
    UsersModule,
    NationalityModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Root05.10A.b',
    database: 'test',
    entities: [Users, Nationality],
    synchronize: true,
    autoLoadEntities: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
