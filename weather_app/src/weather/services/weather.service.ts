import { GetWeatherDto } from '../dto/get-weather.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class WeatherService {
  constructor(private httpService: HttpService) {}
  // Calls the cities service and by the city name, returns the city ID
  // Calls the OpenWeatherAPI with the city ID and returns the weather data
  getWeather(city: GetWeatherDto): Observable<AxiosResponse<any>> {
    const weather = this.httpService
      .post(`http://localhost:3000/cities`, city)
      .pipe(
        switchMap((response) => this.getWeatherById(response.data.city_id)),
      );
    if (weather) return weather;
    else throw new HttpException('City not found', HttpStatus.NOT_FOUND);
  }
  // Calls the OpenWeatherAPI using ID as parameter and returns the weather data
  private getWeatherById(id: number): Observable<AxiosResponse<any>> {
    const open_weather = this.httpService
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=${id}&appid={APIKEY}&lang=pt_br`,
      )
      .pipe(map((response) => response));

    if (open_weather) return open_weather;
    else throw new HttpException('City not found', HttpStatus.NOT_FOUND);
  }
}
