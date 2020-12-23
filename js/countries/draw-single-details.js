import {getSingleDetails} from '../services/api/single-country-details'
import {singleCountry} from '../elements/single-country'
import {drawBorders} from './draw-borders'
export function drawSingleDetails(country){
    getSingleDetails(country, singleCountry, drawBorders)
}