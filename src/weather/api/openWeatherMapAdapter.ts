import { ConfigService } from '@nestjs/config';
import { OpenWeatherMap } from './openWeatherMap';

export class OpenWeatherMapAdapter extends OpenWeatherMap {
  constructor(configService: ConfigService, lat: number, lon: number) {
    super(configService, lat, lat);
  }
  async getCurrentWeatherData() {
    const data = await super.getCurrentWeatherData();
    return this.formattedData(data);
  }
  toCelcius(kelvinTemp: number): number {
    const celciusTemp = kelvinTemp - 273.15;
    return celciusTemp;
  }

  formattedData(data) {
    data['temperature'] = this.toCelcius(data['temperature']);
    return data;
  }
}
