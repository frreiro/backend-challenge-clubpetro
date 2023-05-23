import { Injectable } from '@nestjs/common';

@Injectable()
export class CountriesService {
  findAll() {
    return `This action returns all countries`;
  }
}
