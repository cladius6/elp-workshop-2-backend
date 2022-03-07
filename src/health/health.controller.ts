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
          'https://api.openweathermap.org/',
        ),
      () =>
        this.http.pingCheck('api.weatherbit.io', 'https://api.weatherbit.io/'),
    ]);
  }
}
