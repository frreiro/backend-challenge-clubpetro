import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log(__dirname + '../**/*.entity{.ts,.js}');
export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'test',
  autoLoadEntities: true,
  synchronize: true
};
