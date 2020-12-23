import $ from "jquery";
import {printCountryCard} from '../elements/country-card'
export function drawRegion(region){
    const axios = require('axios');

axios.get('https://restcountries.eu/rest/v2/' + region)
  .then(function (response) {
    $(".js-country-list").empty()
    $.each(response.data, function (indexInArray, valueOfElement) {
        console.log(valueOfElement.name)
        let population = (valueOfElement.population).toLocaleString()
        printCountryCard(valueOfElement.alpha3Code, valueOfElement.flag, valueOfElement.name, population, valueOfElement.region, valueOfElement.capital)
    });
  })
}