export default () => ({
  weatherApi: {
    openWeatherMap: {
      name: 'OpenWeatherMap',
      host: 'https://api.openweathermap.org/',
      baseURL: 'https://api.openweathermap.org/data/2.5/',
      url: 'weather',
      key: process.env.OPENWEATHER_API_KEY,
      unit: 'standard',
    },
    weatherBit: {
      name: 'WeatherBit',
      host: 'https://api.weatherbit.io/',
      baseURL: 'https://api.weatherbit.io/v2.0/',
      url: 'current',
      key: process.env.WEATHERBIT_API_KEY,
      unit: 'metric',
    },
  },
});
