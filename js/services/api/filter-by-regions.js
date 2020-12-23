export function getRegion(region,callback) {
  const axios = require("axios");

  axios
    .get("https://restcountries.eu/rest/v2/"+region)
    .then(function (response) {
        callback
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
}
