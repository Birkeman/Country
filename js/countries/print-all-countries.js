import {printCountryCard} from '../elements/country-card'
import {getAllCountries} from '../services/api/get-all-countries'
export function printAllCountries(){
    getAllCountries(printCountryCard)
}