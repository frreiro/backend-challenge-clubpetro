import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/countries/entities/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeedInsertCountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>
  ) {}

  async insertCountries() {
    console.log('aiu');
    await this.countriesRepository.save({
      name: 'Brasil',
      flag_url: 'https://flagcdn.com/256x192/br.png'
    });
  }
}
