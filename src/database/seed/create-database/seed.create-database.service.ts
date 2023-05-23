import { Injectable } from '@nestjs/common';
import { typeormConfig } from 'src/database/typeorm.config';
import { createDatabase } from 'typeorm-extension';

@Injectable()
export class SeedCreateDatabaseService {
  async createDatabase() {
    const databaseWasCreated = await createDatabase({
      ifNotExist: true,
      options: {
        type: typeormConfig.type,
        host: typeormConfig.host,
        port: typeormConfig.port,
        username: typeormConfig.username,
        password: typeormConfig.password,
        database: typeormConfig.database
      }
    });
    return databaseWasCreated;
  }
}
