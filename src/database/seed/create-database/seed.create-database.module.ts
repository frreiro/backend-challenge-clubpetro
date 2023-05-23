import { Module } from '@nestjs/common';
import { SeedCreateDatabaseService } from './seed.create-database.service';

@Module({
  providers: [SeedCreateDatabaseService]
})
export class SeedCreateDatabaseModule {}
