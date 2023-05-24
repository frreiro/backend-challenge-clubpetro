import {
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength
} from 'class-validator';

export type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';

export type Goal = `${Month}/${number}`;
export class CreateLocationDto {
  @IsInt()
  @IsNotEmpty()
  countryId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  local: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(0[1-9]|1[0-2])\/\d{4}$/, {
    message: 'String is not a valid date'
  })
  goal: Goal;
}
