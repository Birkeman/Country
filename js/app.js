import "/css/app.scss";
import "/node_modules/@fortawesome/fontawesome-free/css/all.css";
import $ from "jquery";
import { searchCountry } from "./filters/search-country";
import { getRegion } from "./services/api/filter-by-regions";
import { drawRegion } from "./filters/draw-region";
import { drawSingleDetails } from "./countries/draw-single-details";
import { printAllCountries } from "./countries/print-all-countries";
import { chooseTheme } from "./filters/choose-theme";

$(document).ready(function () {
  printAllCountries();
  location.hash = "home";
  $(".js-regions").on("change", function () {
    let region = $(this).val();
    getRegion(region, drawRegion(region));
  });

  $(".js-search").on("keyup", searchCountry);

  $(document).on("click", ".js-country-card", function () {
    let countryCode = $(this).attr("data-id");
    location.hash = countryCode;
    drawSingleDetails(countryCode);
  });

  $(document).on("click", ".js-back-btn", function () {
    location.hash = "home";
    $(".js-single-country-div").empty();
    $(".js-filters").show();
    $(".js-regions").val("all");
    printAllCountries();
  });
  $(document).on("click", ".js-border-link", function () {
    let countryCode = $(this).attr("data-id");
    location.hash = countryCode;
    drawSingleDetails(countryCode);
  });
  $(document).on("click", ".js-theme", chooseTheme);
});
