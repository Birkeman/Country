import $ from "jquery";
export function searchCountry(){
    var value = $(".js-search").val();
    $(".js-country-card").hide();
    var match = $(".js-country-card").filter(function () {
      return $(this).attr("data-name").toLowerCase().indexOf(value) !== -1;
    });
    for (var i = 0; i < match.length; i++) {
      match.closest(".js-country-card").show();
    }
    if ($(".js-search").val() == "") {
      ".js-country-card".show();
    }
}