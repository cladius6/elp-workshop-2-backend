import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { WeatherBitKeywordsInterface } from '../interfaces/weather.interface';
import { WeatherApi } from './weatherApi';

export class WeatherBit extends WeatherApi {
  client: AxiosInstance;
  constructor(private configService: ConfigService, lat: number, lon: number) {
    super(lat, lon);
    this.client = this.createClient();
  }
  getCurrentWeatherData(): any {
    const data = super.getCurrentWeatherData(
      this.client,
      this.configService.get<string>('weatherApi.weatherBit.url'),
      this.weatherBitDataKeywords,
    );
    return data;
  }

  private createClient() {
    return axios.create({
      baseURL: this.configService.get<string>('weatherApi.weatherBit.baseURL'),
      timeout: 9000,
      headers: { 'Content-Type': 'application/json' },
      params: {
        key: this.configService.get<string>('weatherApi.weatherBit.key'),
      },
    });
  }

  weatherBitDataKeywords: WeatherBitKeywordsInterface = {
    temp: 'temperature',
    pres: 'pressure',
    rh: 'humidity',
  };
}
