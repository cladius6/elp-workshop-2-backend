import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CurrentWeatherDto } from './weather.dto';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('/current_weather')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  async getCurrentWeather(@Query() queries: CurrentWeatherDto) {
    const response = await this.weatherService.getCurrentWeather(
      queries.lat,
      queries.lon,
      queries.alternateSource,
    );
    return response;
  }
}
