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
  location.hash = "home";

  /////PAGINATION
  var i = 0;
  var x = 5;
  $(window).scroll(function () {
    if (
      $(document).height() - $(this).height() - 400 < $(this).scrollTop() &&
      location.hash == "#home"
    ) {
      do {
        printAllCountries(i);
        i++;
        console.log(i);
      } while (i < x);
      x = +5;
    }
  });
  setTimeout(() => {
    $("body").scrollTop($("body")[0].scrollHeight);
  }, 1000);
  ////////////

  //////REGION FILTERS
  $(".js-regions").on("change", function () {
    let region = $(this).val();
    getRegion(region, drawRegion(region));
  });
  //////////////

  /////SEARCH FILTERS
  $(".js-search").on("keyup", searchCountry);
  /////////////////

  //////SELECT COUNTRY
  $(document).on("click", ".js-country-card", function () {
    let countryCode = $(this).attr("data-id");
    location.hash = countryCode;
    drawSingleDetails(countryCode);
    i = 0;
    x = 5;
  });
  ///////////////

  /////////SINGLE COUNTRY PAGE//////////////
  $(document).on("click", ".js-back-btn", function () {
    location.hash = "home";
    $(".js-single-country-div").empty();
    $(".js-filters").show();
    $(".js-regions").val("all");
    printAllCountries();
    setTimeout(() => {
      $("body").scrollTop($("body")[0].scrollHeight);
    }, 1000);
  });

  $(document).on("click", ".js-border-link", function () {
    let countryCode = $(this).attr("data-id");
    location.hash = countryCode;
    drawSingleDetails(countryCode);
  });
  ////////////////////////

  //////CHANGE THEME MODE
  $(document).on("click", ".js-theme", chooseTheme);
  ////////////
});
