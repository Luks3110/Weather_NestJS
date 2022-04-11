import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { WeatherService } from './services/weather.service';
import { WeatherController } from './controllers/weather.controller';
import { LoggerMiddleware } from './middlewares';

@Module({
  imports: [HttpModule],
  controllers: [WeatherController],
  providers: [
    {
      provide: 'WEATHER_SERVICE',
      useClass: WeatherService,
    },
  ],
})
export class WeatherModule implements NestModule {
  // Configure the logger middleware
  configure(consumer: MiddlewareConsumer) {
    // Use the logger middleware for the weather route when the method GET is called
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'weather',
      method: RequestMethod.GET,
    });
  }
}
