import { Controller, Get } from '@nestjs/common';

@Controller()
export class WeatherController {
  @Get('/current_weather')
  async getCurrentWeather() {
    const response = {
      temperature: 1,
      pressure: 1,
      humidity: 1,
      source: 'its string',
    };
    return response;
  }
}
