import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationDto, Goal } from './create-location.dto';
import {
  IsString,
  Matches,
  MaxLength,
  IsNotEmpty
} from 'class-validator';

export class UpdateLocationDto extends PartialType(
  CreateLocationDto
) {
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  local?: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(0[1-9]|1[0-2])\/\d{4}$/, {
    message: 'String is not a valid date'
  })
  goal?: Goal;
}
