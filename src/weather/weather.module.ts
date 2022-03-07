import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class WeatherModule {}
