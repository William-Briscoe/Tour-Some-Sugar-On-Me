import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const createBookingsHtml = () => {
    let bookingHtml = "<h2>Your current bookings:</h2><ul>"

    for (const booking of bookings) {
        bookingHtml += `<li data-type='booking' data-id='${booking.bandId}'>`

        //iterate through bands
        for (const band of bands) {
            //if booking.bandId === band.id add "band.name is playing at" to the html string
            if (booking.bandId === band.id) {
                bookingHtml += `${band.name} is playing at `
                //then iterate through venues
                for (const venue of venues) {
                    //if booking.venueid is equal to the venue id then add "venue.name on booking.date" to the html string
                    if (booking.venueId === venue.id) {
                        bookingHtml += `${venue.name} on ${booking.dateOfBooking}.`
                    }
                }

            }
        }
        bookingHtml += "</li>"
    }
    bookingHtml += "</ul>"

    return bookingHtml
}

//bookings clickevent
document.addEventListener('click',
    (clickevt) => {

        let itemClicked = clickevt.target

        if (itemClicked.dataset.type === 'booking') {
            for (const band of bands) {
                if (parseInt(itemClicked.dataset.id) === band.id) {
                    window.alert(`${band.name}
${band.genre}
Formed in ${band.yearFormed}
${band.numOfMembers} band members`)
                }
            }
        }
    })

//venues clickEvent that shows all bands book at clicked venue
document.addEventListener('click',
    (clickevt) => {
        let itemClicked = clickevt.target
        let bandsAtVenue = `The following bands have current bookings at this venue:
`
        if (itemClicked.dataset.type === 'venue') {
            for (const booking of bookings) {
                if (parseInt(itemClicked.dataset.id) === booking.venueId) {
                    for (const band of bands) {
                        if (booking.bandId === band.id) {
                            bandsAtVenue += `${band.name}
`
                        }
                    }
                }
            }
            window.alert(bandsAtVenue)
        }

    })

document.addEventListener('click',
    (clickevt) => {
        let itemClicked = clickevt.target
        let venuesPlayedAt = `This band is booked to play at the following venues:
`
        if(itemClicked.dataset.type === "band"){
            for (const booking of bookings) {
                if(parseInt(itemClicked.dataset.id) === booking.bandId){
                    for (const venue of venues) {
                        if(booking.venueId === venue.id){
                            venuesPlayedAt += `${venue.name}
`
                        }
                    }
                }
            }
            window.alert(venuesPlayedAt)
        }
    })