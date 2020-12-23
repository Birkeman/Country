export function getBordersNames(country, callback) {
  const axios = require("axios");
  axios
    .get("https://restcountries.eu/rest/v2/alpha/" + country + "?fields=name")
    .then(function (response) {
      let borderName = response.data.name;
      callback(country, borderName)
      return borderName;
    });
}
