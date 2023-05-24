import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

export type ItypeormConfig =
  | TypeOrmModuleOptions & {
      type: 'postgres';
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };

export const typeormConfig: ItypeormConfig = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
  useUTC: true
};
