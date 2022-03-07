import { IsBoolean, IsNumber } from 'class-validator';

export class CurrentWeatherDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;

  @IsBoolean()
  alternateSource: boolean;
}
