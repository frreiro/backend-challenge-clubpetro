import { NestFactory } from '@nestjs/core';
import { SeedCreateDatabaseService } from './create-database/seed.create-database.service';
import { SeedInsertCountriesService } from './insert-countries/seed.insert-countries.service';
import { SeedCreateDatabaseModule } from './create-database/seed.create-database.module';
import { SeedInserCountriesModule } from './insert-countries/seed.insert-countries.module';
import { Logger } from '@nestjs/common';
import axios from 'axios';

const insertCountries = async () => {
  const appInserCountriesContext =
    await NestFactory.createApplicationContext(
      SeedInserCountriesModule
    );
  const seedInsertCountries = appInserCountriesContext.get(
    SeedInsertCountriesService
  );
  try {
    Logger.log('Inserting default data in database...');
    await seedInsertCountries.insertCountries();
  } catch (error) {
    Logger.error(
      'Something happened while seed inserting default data',
      error
    );
    throw error;
  } finally {
    Logger.log('Default data added');
    appInserCountriesContext.close();
  }
};

async function bootstrap() {
  const appCreateDatabaseContext =
    await NestFactory.createApplicationContext(
      SeedCreateDatabaseModule
    );
  const seedCreateDatabase = appCreateDatabaseContext.get(
    SeedCreateDatabaseService
  );

  try {
    Logger.log('Creating database from scratch...');
    const isFirstRun = await seedCreateDatabase.createDatabase();
    if (isFirstRun) {
      Logger.log('Database created');
      await insertCountries();
    } else {
      Logger.log('Database already exists, finishing seed...');
    }
  } catch (error) {
    Logger.error('Something happened in seed loading', error);
    throw error;
  } finally {
    Logger.log('Seed loaded');
    appCreateDatabaseContext.close();
  }
}
bootstrap();
