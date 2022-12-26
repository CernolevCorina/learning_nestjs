import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Users } from 'modules/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOneBy({ id });
  }

  create(payload): Promise<Users[]> {
    const user = this.usersRepository.create(payload)
    return this.usersRepository.save(user);
  }

  update(id, payload): Promise<UpdateResult> {
    return this.usersRepository.update(id, payload)
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}