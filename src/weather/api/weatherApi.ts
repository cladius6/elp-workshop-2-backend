import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';
import axios, { AxiosInstance } from 'axios';
import { WeatherDataInterface } from '../interfaces/weather.interface';
export class WeatherApi {
  lon: number;
  lat: number;

  constructor(lat: number, lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

  async getCurrentWeatherData(apiClient: AxiosInstance, url: string, keywords) {
    const response = await apiClient.get(url, {
      params: { lat: this.lat, lon: this.lon },
    });
    this.searchWeatherData(response.data, keywords);
    this.addWeatherData(
      'source',
      response.config.baseURL + axios.getUri(response.config),
    );
    return this.weatherData;
  }

  private weatherData: WeatherDataInterface = {
    temperature: null,
    pressure: null,
    humidity: null,
    source: null,
  };

  addWeatherData(key: string, value: number | string): void {
    this.weatherData[key] = value;
  }

  weatherDataKeywords = {
    temperature: (value: number): void =>
      this.addWeatherData('temperature', value),
    pressure: (value: number): void => this.addWeatherData('pressure', value),
    humidity: (value: number): void => this.addWeatherData('humidity', value),
  };

  // Search for required weather data from recived api data.
  searchWeatherData(data: AxiosResponse, keywords) {
    for (const prop in data) {
      if (typeof data[prop] == 'object' && data[prop] !== null) {
        this.searchWeatherData(data[prop], keywords);
      }
      if (Object.keys(keywords).includes(prop)) {
        this.weatherDataKeywords[keywords[prop]](data[prop]);
      }
    }
  }
}
