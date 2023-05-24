import {
  HttpException,
  HttpStatus,
  Injectable
} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from '../countries/entities/country.entity';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone'; // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private locationsRepository: Repository<Location>,

    @InjectRepository(Country)
    private countryRepository: Repository<Country>
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const country = await this.countryRepository.findOneBy({
      id: createLocationDto.countryId
    });

    if (!country)
      throw new HttpException(
        'Country not exist',
        HttpStatus.UNPROCESSABLE_ENTITY
      );

    const existLocationName =
      await this.locationsRepository.findOneBy({
        name: createLocationDto.local,
        country: country
      });

    if (existLocationName)
      throw new HttpException(
        'Local in Country already exists',
        HttpStatus.UNPROCESSABLE_ENTITY
      );

    const month = createLocationDto.goal.split('/')[0];
    const year = createLocationDto.goal.split('/')[1];
    const parsedDateToBrazilTZ = dayjs(`${year}-${month}-01`)
      .tz('America/Sao_Paulo')
      .toDate();

    const local = new Location({
      name: createLocationDto.local,
      goal: parsedDateToBrazilTZ,
      country: country,
      created_at: dayjs().tz('America/Sao_Paulo').toDate(),
      updated_at: dayjs().tz('America/Sao_Paulo').toDate()
    });
    await this.locationsRepository.save(local);
  }

  async findAll() {
    const querylocations = await this.locationsRepository
      .createQueryBuilder('locations')
      .leftJoinAndSelect(
        'country',
        'country',
        'country.id = locations.countryId'
      )
      .select([
        'locations.id AS id',
        'country.name AS country',
        'locations.name AS local',
        `to_char(locations.goal, 'MM/YYYY') AS goal`,
        'country.flag_url AS flag_url',
        'locations.created_at AS created_at',
        'locations.updated_at AS updated_at'
      ])
      .orderBy('locations.goal', 'ASC')
      .execute();

    return querylocations;
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const existLocationName =
      await this.locationsRepository.findOneBy({
        id: id
      });

    if (!existLocationName || !Object.keys(updateLocationDto).length)
      throw new HttpException(
        'Local do not exist',
        HttpStatus.UNPROCESSABLE_ENTITY
      );

    const partityLocation: Partial<Location> = {};
    if (updateLocationDto.goal) {
      const month = updateLocationDto.goal.split('/')[0];
      const year = updateLocationDto.goal.split('/')[1];
      const parsedDateToBrazilTZ = dayjs(`${year}-${month}-01`)
        .tz('America/Sao_Paulo')
        .toDate();
      partityLocation.goal = parsedDateToBrazilTZ;
    } else {
      partityLocation.name = updateLocationDto.local;
    }
    return this.locationsRepository.update(
      {
        id: id
      },
      partityLocation
    );
  }

  async remove(id: number) {
    return await this.locationsRepository.delete({
      id: id
    });
  }
}
