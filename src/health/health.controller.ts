import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get('/api')
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          'api.openweathermap.org',
          `https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=${process.env.OPENWEATHER_API_KEY}`,
        ),
      () =>
        this.http.pingCheck(
          'api.weatherbit.io',
          `https://api.weatherbit.io/v2.0/current?lat=0&lon=0&key=${process.env.WEATHERBIT_API_KEY}`,
        ),
    ]);
  }
}
