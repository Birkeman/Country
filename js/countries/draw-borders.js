import $ from "jquery";
import { getBordersNames } from "../services/api/get-border-names";
function test1(country, borderName){
  $(".js-borders").append(
    '<button data-id= "' +
      country +
      '" class="border-countries-link js-border-link">' +
      borderName +
      "</button>"
  );
}
export function drawBorders(border) {
  for (let index = 0; index < border.length; index++) {
    const element = border[index];
    getBordersNames(element,test1);
  }
}
