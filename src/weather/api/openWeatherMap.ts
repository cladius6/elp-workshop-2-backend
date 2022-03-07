import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { WeatherApi } from './weatherApi';
import { OpenWeatherMapKeywordsInterface } from '../interfaces/weather.interface';

export class OpenWeatherMap extends WeatherApi {
  client: AxiosInstance;
  constructor(private configService: ConfigService, lat: number, lon: number) {
    super(lat, lon);
    this.client = this.createClient();
  }
  getCurrentWeatherData(): any {
    const data = super.getCurrentWeatherData(
      this.client,
      this.configService.get<string>('weatherApi.openWeatherMap.url'),
      this.openWeatherDataKeywords,
    );
    return data;
  }

  public createClient() {
    return axios.create({
      baseURL: this.configService.get<string>(
        'weatherApi.openWeatherMap.baseURL',
      ),
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
      params: {
        APPID: this.configService.get<string>('weatherApi.openWeatherMap.key'),
      },
    });
  }

  openWeatherDataKeywords: OpenWeatherMapKeywordsInterface = {
    temp: 'temperature',
    pressure: 'pressure',
    humidity: 'humidity',
  };
}
