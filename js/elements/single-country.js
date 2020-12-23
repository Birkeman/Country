import $ from "jquery";
export function singleCountry(
  id,
  flag,
  name,
  native,
  population,
  region,
  subRegion,
  capital,
  domain,
  currencies,
  language
) {
  let singleCountry =
    `
    <div class="go-back-div">
    <button class="btn-go-back js-back-btn"><i class="fas fa-arrow-left"></i>   Back</button>
</div>
<div class="single-country-info" data-id="` +
    id +
    `">
    <div class="single-country-flag">
        <img src="` +
    flag +
    `">
    </div>
    <div class="single-country-details">
        <div class="details-div">
                <h1>` +
    name +
    `</h1>
                <h3>Native Name: <span>` +
    native +
    `</span></h3>
                <h3>Population: <span>` +
    population +
    `</span></h3>
                <h3>Region: <span>` +
    region +
    `</span></h3>
                <h3>Sub Region: <span>` +
    subRegion +
    `</span></h3>
                <h3>Capital: <span>` +
    capital +
    `</span></h3>
        </div>
        <div class="details-div-bottom">
            <h3>Top Level Domain: <span>` +
    domain +
    `</span></h3>
            <h3>Currencies: <span>` +
    currencies +
    `</span></h3>
            <h3>Languages: <span class="js-lang">` +
    language +
    `</span></h3>
        </div>
        <div class="border-countries-div">
            <div>
                <h3>Border Countries:</h3>
            </div>
            <div class="border-list js-borders" style="display: flex;flex-wrap: wrap;">
            </div>
        </div>
    </div>
</div>`;
  $(".js-single-country-div").empty();
  $(".js-country-list").empty();
  $(".js-filters").hide();
  $(".js-single-country-div").append(singleCountry);
}
