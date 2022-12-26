import { Users } from "../../modules/users/entities/user.entity";
import { Nationality } from "../../modules/nationalities/entities/nationality.entity";

export const ConfigDB = () => {
  return {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Users, Nationality],
    synchronize: true,
    autoLoadEntities: true,
  }
}