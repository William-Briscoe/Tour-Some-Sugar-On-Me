import { createBookingsHtml } from "./bookings.js"
import { createVenuesHtml } from "./venues.js"
import { createBandsHtml } from "./bands.js"

let parentHTMLElement = document.querySelector('#bookingsGoHere')
parentHTMLElement.innerHTML = createBookingsHtml()

parentHTMLElement = document.querySelector('#venuesGoHere')
parentHTMLElement.innerHTML = createVenuesHtml()

parentHTMLElement = document.querySelector('#bandsGoHere')
parentHTMLElement.innerHTML = createBandsHtml()