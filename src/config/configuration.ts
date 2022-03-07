export default () => ({
  weatherApi: {
    openWeatherMap: {
      name: 'openweathermap.org',
      host: 'https://api.openweathermap.org/',
      key: process.env.OPENWEATHER_API_KEY,
    },
    weatherBit: {
      name: 'weatherbit.io',
      host: 'https://api.weatherbit.io/',
      key: process.env.WEATHERBIT_API_KEY,
    },
  },
});
