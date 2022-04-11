// Weather data that should be returned to the client
export class Weather {
  constructor(
    public id: number,
    public city: string,
    public temperature: number,
    public humidity: number,
    public pressure: number,
    public windSpeed: number,
    public description: string,
  ) {}
}
