import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    WeatherModule,
    MongooseModule.forRoot(`mongodb://localhost:27017/fastersapi`),
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
