import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { WeatherApi } from './weatherApi';

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
    );
    return data;
  }

  public createClient() {
    return axios.create({
      baseURL: this.configService.get<string>(
        'weatherApi.openWeatherMap.baseURL',
      ),
      params: {
        APPID: this.configService.get<string>('weatherApi.openWeatherMap.key'),
      },
    });
  }
}
