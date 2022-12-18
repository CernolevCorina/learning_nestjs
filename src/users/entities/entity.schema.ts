import { EntitySchema } from 'typeorm';
import { Users } from './user.entity';

export const UserSchema = new EntitySchema<Users>({
  name: 'Users',
  target: Users,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    role: {
      type: "enum",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    // relations: {
    //   photos: {
    //     type: 'one-to-many',
    //     target: 'Photos', //the name of the PhotoSchema
    //   },
    // },
  }
})