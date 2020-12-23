import { route } from "./routes";
export function getBordersNames(country, callback) {
  const axios = require("axios");
  axios
    .get(route + "alpha/" + country + "?fields=name")
    .then(function (response) {
      let borderName = response.data.name;
      callback(country, borderName);
      return borderName;
    });
}
