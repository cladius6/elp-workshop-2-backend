export default () => ({
  weatherApi: {
    openWeatherMap: {
      name: 'openweathermap.org',
      host: 'https://api.openweathermap.org/',
      url: 'weather',
      key: process.env.OPENWEATHER_API_KEY,
      unit: 'standart',
    },
    weatherBit: {
      name: 'weatherbit.io',
      host: 'https://api.weatherbit.io/',
      url: 'current',
      key: process.env.WEATHERBIT_API_KEY,
      unit: 'metric',
    },
  },
});
