import {
  Controller,
  Body,
  Post,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { CitiesService } from '../services/cities.service';
import { GetCityDto } from '../dto/get-city.dto';

@Controller('cities')
export class CitiesController {
  constructor(
    @Inject('CITY_SERVICE') private readonly citiesService: CitiesService,
  ) {}

  @Post()
  async findOne(@Body() getCityDto: GetCityDto) {
    // Calls the cities service and by the city name, returns the city ID
    const city = await this.citiesService.findOne(getCityDto);
    // If the city was found, return the city data
    if (city) return city;
    // If the city was not found, throw an error
    else throw new NotFoundException('City not found');
  }
}
