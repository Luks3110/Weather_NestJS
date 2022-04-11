import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { GetCityDto } from '../dto/get-city.dto';
import { City, CityDocument } from '../schemas/city.schema';

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) {}
  // Search MongoDB for the city by name
  async findOne(getCityDto: GetCityDto): Promise<CityDocument> {
    const city = await this.cityModel.findOne({ name: getCityDto.city });
    return city;
  }
}
