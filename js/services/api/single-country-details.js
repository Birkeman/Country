export function getSingleDetails(country, callback, callback2) {
  const axios = require("axios");

  axios
    .get("https://restcountries.eu/rest/v2/alpha/" + country)
    .then(function (response) {
      callback(
        response.data.alpha3Code,
        response.data.flag,
        response.data.name,
        response.data.nativeName,
        response.data.population.toLocaleString(),
        response.data.region,
        response.data.subregion,
        response.data.capital,
        response.data.topLevelDomain,
        response.data.currencies[0].name,
        response.data.languages.map(a => a.name),
        callback2(response.data.borders)       
      );
    });
}
/* <button data-id= ""class="border-countries-link">France</button>

<button class="border-countries-link">Germany</button>

<button class="border-countries-link">Netherlands</button> */