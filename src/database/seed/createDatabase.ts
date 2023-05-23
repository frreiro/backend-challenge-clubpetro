import { createDatabase } from 'typeorm-extension';
import { typeormConfig } from '../typeorm.config';
import * as dotenv from 'dotenv';
dotenv.config();

(async () => {
  await createDatabase({
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
  process.exit(0);
})();
