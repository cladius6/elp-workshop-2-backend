import { Injectable } from '@nestjs/common';
import { WeatherBit } from './api/weatherBit';
import { ConfigService } from '@nestjs/config';
import { OpenWeatherMapAdapter } from './api/openWeatherMapAdapter';

@Injectable()
export class WeatherService {
  constructor(private configService: ConfigService) {}

  async getCurrentWeather(lat: number, lon: number, alternateSource: boolean) {
    const weatherSource = alternateSource
      ? new WeatherBit(this.configService, lat, lon)
      : new OpenWeatherMapAdapter(this.configService, lat, lon);
    const response = weatherSource.getCurrentWeatherData();
    return response;
  }
}
