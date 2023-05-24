import { Module } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationsController } from './locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './entities/location.entity';
import { Country } from '../countries/entities/country.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location]),
    TypeOrmModule.forFeature([Country])
  ],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
