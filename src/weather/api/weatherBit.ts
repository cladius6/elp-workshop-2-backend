import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
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

  public createClient() {
    return axios.create({
      baseURL: this.configService.get<string>('weatherApi.weatherBit.baseURL'),
      params: {
        key: this.configService.get<string>('weatherApi.weatherBit.key'),
      },
    });
  }

  weatherBitDataKeywords = {
    temp: 'temperature',
    pres: 'pressure',
    rh: 'humidity',
  };
}
