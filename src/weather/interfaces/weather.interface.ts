export interface WeatherDataInterface {
  temperature: number | null;
  humidity: number | null;
  pressure: number | null;
  source: string | null;
}
export interface WeatherBitKeywordsInterface {
  temp: string;
  pres: string;
  rh: string;
}
export interface OpenWeatherMapKeywordsInterface {
  temp: string;
  pressure: string;
  humidity: string;
}
