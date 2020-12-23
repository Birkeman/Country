import $ from "jquery";
export function printCountryCard(id, flag, country, population, region, capital) {
  let countryCard =
    `
    <div class="country-card js-country-card" data-id="`+ id+`" data-name="`+country+`">
        <div class="flag-container">
            <img class="country-flag" src="`+flag+`">
        </div>
        <div class="country-info">
                <h2 class="js-country-name">` +
    country +
    `</h2>
                <h3>Population:
                    <span class="js-country-population">` +
    population +
    `</span>
                </h3>
                <h3>Region: 
                    <span class="js-country-region">` +
    region +
    `</span>
                </h3>
                <h3>Capital: 
                <span class="js-country-capital">` +
    capital +
    `</span>
                </h3>
        </div>
    </div>
    `;
  $(".country-list").append(countryCard);
}
