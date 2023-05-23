import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/app/countries/entities/country.entity';
import { Repository } from 'typeorm';
import axios from 'axios';

export interface CoutryResquest {
  Code: string;
  Name: string;
}
@Injectable()
export class SeedInsertCountriesService {
  constructor(
    @InjectRepository(Country)
    private countriesRepository: Repository<Country>
  ) {}

  async insertCountries() {
    const { data }: { data: CoutryResquest[] } = await axios.get(
      'https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json'
    );

    const coutriesData = data.map((coutry_request): Country => {
      const coutryCode = coutry_request.Code.toLowerCase();
      const createdUrl = `https://flagcdn.com/256x192/${coutryCode}.png`;
      const regionNamesInEnglish = new Intl.DisplayNames(['pt-br'], {
        type: 'region'
      });

      return {
        name: regionNamesInEnglish.of(coutry_request.Code),
        flag_url: createdUrl,
        code: coutryCode
      };
    });

    await this.countriesRepository.save(coutriesData);
  }
}
