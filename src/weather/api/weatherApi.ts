import { AxiosInstance } from 'axios';
export class WeatherApi {
  lon: number;
  lat: number;

  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

  async getCurrentWeatherData(apiClient: AxiosInstance, url: string) {
    const response = await apiClient.get(url, {
      params: { lat: this.lat, lon: this.lon },
    });
    return response.data;
  }
}
