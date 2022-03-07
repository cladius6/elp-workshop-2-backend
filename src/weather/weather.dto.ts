import { IsBoolean, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ToBoolean } from 'src/decorators/toBoolean.decorator';

export class CurrentWeatherDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;

  @ToBoolean()
  @IsBoolean()
  @IsOptional()
  alternateSource: boolean;
}
