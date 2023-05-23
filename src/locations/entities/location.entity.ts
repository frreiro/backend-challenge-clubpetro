import { Country } from 'src/countries/entities/country.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Country)
  @JoinColumn()
  country: Country;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;
}
