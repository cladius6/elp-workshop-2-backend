import { ConfigService } from '@nestjs/config';
import { WeatherDataInterface } from '../interfaces/weather.interface';
import { OpenWeatherMap } from './openWeatherMap';

export class OpenWeatherMapAdapter extends OpenWeatherMap {
  constructor(configService: ConfigService, lat: number, lon: number) {
    super(configService, lat, lon);
  }
  async getCurrentWeatherData() {
    const data = await super.getCurrentWeatherData();
    return this.formattedData(data);
  }

  private toCelcius(kelvinTemp: number): number {
    const celciusTemp = (kelvinTemp - 273.15).toFixed(1);
    return parseFloat(celciusTemp);
  }

  private formattedData(data: WeatherDataInterface) {
    data['temperature'] = this.toCelcius(data['temperature']);
    return data;
  }
}
