import { Entity, Column, PrimaryGeneratedColumn /*OneToMany*/ } from 'typeorm';
// import { Photo } from '../photos/photo.entity';

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  GHOST = "ghost",
}

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

  // @OneToMany(type => Photo, photo => photo.user)
  // photos: Photo[];
}