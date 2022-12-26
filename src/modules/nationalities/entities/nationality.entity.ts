import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from 'modules/users/entities/user.entity';

@Entity()
export class Nationality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Users, (user) => user.nationalities)
  user: Users[];
}
