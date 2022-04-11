import {
  Controller,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { GetWeatherDto } from '../dto/get-weather.dto';
import { Weather } from '../entities/weather.entity';
import {
  kelvinToCelsius,
  capitalizeFirstLetter,
} from '../utils/helperFunctions';
import { WeatherService } from '../services/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(
    @Inject('WEATHER_SERVICE') private readonly weatherService: WeatherService,
  ) {}

  @Get()
  @UsePipes(ValidationPipe)
  getWeather(@Body() city: GetWeatherDto): Observable<Weather> {
    // Calls the service and returns the weather data
    const request = this.weatherService
      .getWeather({ city: capitalizeFirstLetter(city.city) })
      .pipe(
        map((response) => {
          const { temp, humidity } = response.data.main;
          const { speed, deg } = response.data.wind;
          const { description } = response.data.weather[0];
          const { name, id } = response.data;

          const weather = new Weather(
            id,
            name,
            kelvinToCelsius(temp),
            humidity,
            speed,
            deg,
            description,
          );

          return weather;
        }),
      );
    // If the request goes through, the observable will emit the response
    if (request) return request;
    // If the request fails, the observable will throw an error
    else throw new NotFoundException('City not found');
  }
}
