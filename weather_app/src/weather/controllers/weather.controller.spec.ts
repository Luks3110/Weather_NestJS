import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from '../services/weather.service';
import { GetWeatherDto } from '../dto/get-weather.dto';
import { HttpModule } from '@nestjs/axios';
import { Observable } from 'rxjs';

describe('WeatherController', () => {
  let controller: WeatherController;

  const mockWeatherService = {
    getWeather: jest.fn((dto) => {
      return {
        id: Date.now(),
        city: 6321026,
        temperature: 145.64,
        humidity: 88,
        pressure: 0.45,
        windSpeed: 191,
        description: 'céu limpo',
      };
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [WeatherController],
      providers: [
        {
          provide: 'WEATHER_SERVICE',
          useClass: WeatherService,
        },
      ],
    })
      .overrideProvider(WeatherService)
      .useValue(mockWeatherService)
      .compile();

    controller = module.get<WeatherController>(WeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get the weather from open-weather api', () => {
    const dto: GetWeatherDto = { city: 'Salvador' };
    expect(controller.getWeather(dto)).toEqual({
      id: expect.any(Number),
      city: expect.any(Number),
      temperature: expect.any(Number),
      humidity: expect.any(Number),
      pressure: expect.any(Number),
      windSpeed: expect.any(Number),
      description: expect.any(String),
      Observable: expect.any(Observable),
    });
  });
});
