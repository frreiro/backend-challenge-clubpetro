import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from '../database/typeorm.config';

//TODO: remove app.controller
@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    LocationsModule,
    CountriesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
