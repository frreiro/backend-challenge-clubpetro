import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async create(@Body() createLocationDto: CreateLocationDto) {
    return await this.locationsService.create(createLocationDto);
  }

  @Get()
  async findAll() {
    return this.locationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.locationsService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateLocationDto: UpdateLocationDto
  ) {
    if (!updateLocationDto.goal && !updateLocationDto.local) {
      throw new HttpException(
        'Must insert local or goal',
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    return await this.locationsService.update(
      +id,
      updateLocationDto
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.locationsService.remove(+id);
  }
}
