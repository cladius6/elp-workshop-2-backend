import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  async getCurrentWeather(lat: number, lon: number, alternateSource: boolean) {
    const response = {
      temperature: 1,
      pressure: 1,
      humidity: 1,
      source: 'its string',
    };
    return response;
  }
}
