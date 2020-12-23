export function getBorders(country, callback){
    const axios = require("axios");

    axios
      .get("https://restcountries.eu/rest/v2/alpha/" + country)
      .then(function (response) {
        callback(response.data.borders)
      });
}