import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CityDocument = City & Document;

interface Coordinates {
  lat: number;
  lon: number;
}
// Mongoose schema for the City model
@Schema()
class Coordinates {
  @Prop({ type: Number })
  lat: number;

  @Prop({ type: Number })
  lon: number;
}

@Schema()
export class City {
  @Prop()
  city_id: number;

  @Prop()
  name: string;

  @Prop()
  state: string;

  @Prop()
  country: string;

  @Prop({ type: Coordinates })
  coord: Coordinates;
}

export const CitySchema = SchemaFactory.createForClass(City);
