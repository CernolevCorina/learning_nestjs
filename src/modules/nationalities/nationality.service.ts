import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { Nationality } from "modules/nationalities/entities/nationality.entity";

@Injectable()
export class NationalityService {
  constructor(
    @InjectRepository(Nationality)
    private nationalityRepository: Repository<Nationality>,
  ) {}

  findAll(): Promise<Nationality[]> {
    return this.nationalityRepository.find();
  }

  findOne(id: number): Promise<Nationality> {
    return this.nationalityRepository.findOneBy({id});
  }

  create(payload): Promise<Nationality[]> {
    const nationality = this.nationalityRepository.create(payload)
    return this.nationalityRepository.save(nationality);
  }

  update(id, payload): Promise<UpdateResult> {
    return this.nationalityRepository.update(id, payload)
  }

  async remove(id: number): Promise<void> {
    await this.nationalityRepository.delete(id);
  }
}
