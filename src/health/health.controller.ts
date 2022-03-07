import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  HealthCheck,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(
    private configService: ConfigService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  @Get('/api')
  @HealthCheck()
  check() {
    return this.health.check([
      () =>
        this.http.pingCheck(
          this.configService.get<string>('weatherApi.openWeatherMap.name'),
          this.configService.get<string>('weatherApi.openWeatherMap.host'),
        ),
      () =>
        this.http.pingCheck(
          this.configService.get<string>('weatherApi.weatherBit.name'),
          this.configService.get<string>('weatherApi.weatherBit.host'),
        ),
    ]);
  }
}
