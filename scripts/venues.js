import { getVenues } from "./database.js";

const venues = getVenues()

export const createVenuesHtml = () =>{
    let venueHtml = "<h3>The Venues</h3><ul>"

    for (const venue of venues) {
        venueHtml += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`
        
    }
    venueHtml += "</ul>"

    return venueHtml
}