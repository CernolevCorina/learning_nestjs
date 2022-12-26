import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Nationality } from 'modules/nationalities/entities/nationality.entity';
import { UserRole } from 'config/enum/user.roles';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.GHOST,
  })
  role: UserRole;

  @Column({default: true})
  isActive: boolean;

  @Column("simple-json")
  profile: { nickname: string };

  @OneToMany(() => Nationality, (nationality) => nationality.user)
  nationalities: Nationality[];

}