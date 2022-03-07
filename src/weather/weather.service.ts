import { Injectable } from '@nestjs/common';
import { OpenWeatherMap } from './api/openWeatherMap';
import { WeatherBit } from './api/weatherBit';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  constructor(private configService: ConfigService) {}

  async getCurrentWeather(lat: number, lon: number, alternateSource: boolean) {
    const weatherSource = alternateSource
      ? new WeatherBit(this.configService, lat, lon)
      : new OpenWeatherMap(this.configService, lat, lon);
    const response = weatherSource.getCurrentWeatherData();
    return response;
  }
}
