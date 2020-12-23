import { allCountries } from "./routes";
export function getAllCountries(callback, i) {
  const axios = require("axios");

  axios.get(allCountries).then(function (response) {
    // $.each(response.data, function (indexInArray, valueOfElement) {
    // callback(
    //   valueOfElement.alpha3Code,
    //   valueOfElement.flag,
    //   valueOfElement.name,
    //   valueOfElement.population.toLocaleString(),
    //   valueOfElement.region,
    //   valueOfElement.capital
    // );
    callback(
      response.data[i].alpha3Code,
      response.data[i].flag,
      response.data[i].name,
      response.data[i].population.toLocaleString(),
      response.data[i].region,
      response.data[i].capital
    );
    // });
  });
}
