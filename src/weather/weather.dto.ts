import { IsBoolean, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ToBoolean } from 'src/decorators/toBoolean.decorator';

export class CurrentWeatherDto {
  @IsNumber()
  @Max(90.0)
  @Min(-90.0)
  lat: number;

  @IsNumber()
  @Max(180.0)
  @Min(-180.0)
  lon: number;

  @ToBoolean()
  @IsBoolean()
  @IsOptional()
  alternateSource: boolean;
}
