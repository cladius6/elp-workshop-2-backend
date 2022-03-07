import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { HealthController } from './health/health.controller';
import { WeatherController } from './weather/weather.controller';

@Module({
  imports: [ConfigModule.forRoot(), TerminusModule, HttpModule],
  controllers: [AppController, HealthController, WeatherController],
  providers: [],
})
export class AppModule {}
