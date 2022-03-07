import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/current_weather')
  async getCurrentWeather(@Query() queries) {
    const response = await this.weatherService.getCurrentWeather(
      queries.lat,
      queries.lon,
      queries.alternateSource,
    );
    return response;
  }
}
