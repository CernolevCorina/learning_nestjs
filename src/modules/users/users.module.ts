import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'modules/users/users.service';
import { UsersController } from 'modules/users/users.controller';
import { Users } from 'modules/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService],
  controllers: [UsersController],
})

export class UsersModule {}