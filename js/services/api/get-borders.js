import { route } from "./routes";
export function getBorders(country, callback) {
  const axios = require("axios");

  axios.get(route + "alpha/" + country).then(function (response) {
    callback(response.data.borders);
  });
}
