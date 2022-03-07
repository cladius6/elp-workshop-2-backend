describe('#GET example', () => {
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

function apiIsAvailable() {
  cy.request('GET', '/health/api').then((response) => {
    expect(response.body).to.have.property('status', 'ok');
  });
}

function getCurrentWeather(
  latitude: number,
  longitude: number,
  alternateSource: boolean,
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
  request.should((response) => {
    if (type != undefined) {
      expect(response.body).to.have.property(key).a(type);
    } else {
      expect(response.body).to.have.property(key);
    }
  });
}
