import $ from "jquery";

export function getAllCountries(callback) {
  const axios = require("axios");

  axios.get("https://restcountries.eu/rest/v2/all").then(function (response) {
    $.each(response.data, function (indexInArray, valueOfElement) {
      callback(
        valueOfElement.alpha3Code,
        valueOfElement.flag,
        valueOfElement.name,
        valueOfElement.population.toLocaleString(),
        valueOfElement.region,
        valueOfElement.capital
      );
    });
  });
}
