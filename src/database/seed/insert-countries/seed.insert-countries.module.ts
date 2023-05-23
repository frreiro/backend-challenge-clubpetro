import { Module } from '@nestjs/common';
import { SeedInsertCountriesService } from './seed.insert-countries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/app/countries/entities/country.entity';
import { typeormConfig } from 'src/database/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([Country])
  ],
  providers: [SeedInsertCountriesService]
})
export class SeedInserCountriesModule {}
