import { route } from "./routes";
export function getRegion(region, callback) {
  const axios = require("axios");

  axios
    .get(route + region)
    .then(function (response) {
      callback;
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}
