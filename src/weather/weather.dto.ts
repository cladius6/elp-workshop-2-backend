import { IsBoolean, IsNumber } from 'class-validator';
import { ToBoolean } from 'src/decorators/toBoolean.decorator';

export class CurrentWeatherDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lon: number;

  @ToBoolean()
  @IsBoolean()
  alternateSource: boolean;
}
