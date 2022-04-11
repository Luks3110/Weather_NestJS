import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CitiesService } from './services/cities.service';
import { CitiesController } from './controllers/cities.controller';
import { City, CitySchema } from './schemas/city.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
  controllers: [CitiesController],
  providers: [
    {
      provide: 'CITY_SERVICE',
      useClass: CitiesService,
    },
  ],
})
export class CitiesModule {}
