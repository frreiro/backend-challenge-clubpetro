import { Country } from 'src/app/countries/entities/country.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm';

@Entity('locations')
@Unique(['name', 'country'])
export class Location {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column({ type: 'timestamp without time zone' })
  goal: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Country)
  @JoinColumn()
  country: Country;

  constructor(createLocation?: Location) {
    Object.assign(this, createLocation);
  }
}
