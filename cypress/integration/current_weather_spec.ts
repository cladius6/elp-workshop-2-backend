describe('#GET example', () => {
  describe("for default weather data api, when query 'alternateSource=false'", () => {
    describe("check if returned objects have 'temperature, pressure, humidity, source' properties", () => {
      it("returned object should have 'temperature' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'temperature');
      });

      it("returned object should have 'pressure' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'pressure');
      });

      it("returned object should have 'humidity' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'humidity');
      });

      it("returned object should have 'source' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'source');
      });
    });
    describe("check if returned objects have 'temperature, pressure, humidity, source' properties of correct type", () => {
      it("'temperature' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'temperature', 'number');
      });
      it("'pressure' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'pressure', 'number');
      });
      it("'humidity' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'humidity', 'number');
      });
      it("'source' property value should be string", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, false);

        //then
        haveProperty(request, 'source', 'string');
      });
    });
  });

  describe("for alternate weather data api, when query 'alternateSource=true'", () => {
    describe("check if returned objects have 'temperature, pressure, humidity, source' properties", () => {
      it("returned object should have 'temperature' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'temperature');
      });
      it("returned object should have 'pressure' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'temperature');
      });

      it("returned object should have 'humidity' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'temperature');
      });

      it("returned object should have 'source' property", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'temperature');
      });
    });
    describe("check if returned objects have 'temperature, pressure, humidity, source' properties as desired type", () => {
      it("'temperature' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'temperature', 'number');
      });
      it("'pressure' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'pressure', 'number');
      });
      it("'humidity' property value should be number", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'humidity', 'number');
      });
      it("'source' property value should be string", () => {
        // given
        apiIsAvailable();

        //when
        const request = getCurrentWeather(1, 1, true);

        //then
        haveProperty(request, 'source', 'string');
      });
    });
  });

  describe("'alternateSource' should have diffrent 'source' depending of its value", () => {
    it("'source' should contains openweathermap.org when 'alternateSource=false'", () => {
      // given
      apiIsAvailable();

      //when
      const request = getCurrentWeather(1, 1, false);

      //then
      request.should((response) => {
        expect(response.body.source).contains(
          'https://api.openweathermap.org/data/2.5/weather?',
        );
      });
    });
    it("'source' should contains weatherbit.it when 'alternateSource=true'", () => {
      // given
      apiIsAvailable();

      //when
      const request = getCurrentWeather(1, 1, true);

      //then
      request.should((response) => {
        expect(response.body.source).contains(
          'https://api.weatherbit.io/v2.0/current?',
        );
      });
    });

    it("'alterneteSource' is optional and default value should be 'false' and use OpenWeatherApi", () => {
      // given
      apiIsAvailable();

      //when
      const request = getCurrentWeather(1, 1);

      //then
      request.should((response) => {
        expect(response.body.source).contains(
          'https://api.openweathermap.org/data/2.5/weather?',
        );
      });
    });
  });
});

function apiIsAvailable() {
  cy.request('GET', '/health/api').then((response) => {
    expect(response.body).to.have.property('status', 'ok');
  });
}

function getCurrentWeather(
  latitude: number,
  longitude: number,
  alternateSource?: boolean,
): Cypress.Chainable<Cypress.Response<any>> {
  return cy.request({
    method: 'GET',
    url: `/current_weather`,
    qs: {
      lat: latitude,
      lon: longitude,
      alternateSource: alternateSource,
    },
  });
}

async function haveProperty(
  request: Cypress.Chainable<Cypress.Response<any>>,
  key: string,
  type?: string,
) {
  request.then((response) => {
    if (type != undefined) {
      expect(response.body).to.have.property(key).a(type);
    } else {
      expect(response.body).to.have.property(key);
    }
  });
}
