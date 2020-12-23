import $ from "jquery";
import { route } from "../services/api/routes";
import { printCountryCard } from "../elements/country-card";
export function drawRegion(region) {
  const axios = require("axios");

  axios.get(route + region).then(function (response) {
    $(".js-country-list").empty();
    $.each(response.data, function (indexInArray, valueOfElement) {
      let population = valueOfElement.population.toLocaleString();
      printCountryCard(
        valueOfElement.alpha3Code,
        valueOfElement.flag,
        valueOfElement.name,
        population,
        valueOfElement.region,
        valueOfElement.capital
      );
    });
  });
}
