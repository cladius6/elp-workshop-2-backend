import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { HealthController } from './health/health.controller';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [ConfigModule.forRoot(), TerminusModule, HttpModule, WeatherModule],
  controllers: [AppController, HealthController],
  providers: [],
})
export class AppModule {}
