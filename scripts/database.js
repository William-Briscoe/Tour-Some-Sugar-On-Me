const database = {
    bookings:[
        {
            id: 1,
            bandId: 1,
            venueId: 1,
            dateOfBooking: "01-07-22"
        },
        {
            id: 2,
            bandId: 2,
            venueId: 1,
            dateOfBooking: "01-07-22"
        },
        {
            id: 3,
            bandId: 3,
            venueId: 2,
            dateOfBooking: "02-07-22"
        },
        {
            id: 4,
            bandId: 4,
            venueId: 2,
            dateOfBooking: "02-07-22"
        },
        {
            id: 5,
            bandId: 5,
            venueId: 3,
            dateOfBooking: "03-07-22"
        },
        {
            id: 6,
            bandId: 6,
            venueId: 3,
            dateOfBooking: "03-07-22"
        },
        {
            id: 7,
            bandId: 7,
            venueId: 4,
            dateOfBooking: "04-07-22"
        },
        {
            id: 8,
            bandId: 8,
            venueId: 4,
            dateOfBooking: "04-07-22"
        },
        {
            id: 9,
            bandId: 9,
            venueId: 1,
            dateOfBooking: "05-07-22"
        },
        {
            id: 10,
            bandId: 6,
            venueId: 1,
            dateOfBooking: "05-07-22"
        },
        {
            id: 11,
            bandId: 3,
            venueId: 2,
            dateOfBooking: "06-07-22"
        },
        {
            id: 12,
            bandId: 9,
            venueId: 2,
            dateOfBooking: "06-07-22"
        },
        {
            id: 13,
            bandId: 5,
            venueId: 3,
            dateOfBooking: "07-07-22"
        },
        {
            id: 14,
            bandId: 1,
            venueId: 3,
            dateOfBooking: "07-07-22"
        },
        {
            id: 15,
            bandId: 4,
            venueId: 4,
            dateOfBooking: "08-07-22"
        },
        {
            id: 16,
            bandId: 7,
            venueId: 4,
            dateOfBooking: "08-07-22"
        },
        {
            id: 17,
            bandId: 8,
            venueId: 1,
            dateOfBooking: "09-07-22"
        },
        {
            id: 18,
            bandId: 2,
            venueId: 1,
            dateOfBooking: "09-07-22"
        },
        {
            id: 19,
            bandId: 6,
            venueId: 2,
            dateOfBooking: "10-07-22"
        },
        {
            id: 20,
            bandId: 3,
            venueId: 2,
            dateOfBooking: "10-07-22"
        }
    ],
    venues:[
        {
            id: 1,
            name: "The Sound Garden",
            address: "123 Main St, Anytown, USA",
            squareFootage: 10000,
            maximumOccupancy: 1500
        },
        {
            id: 2,
            name: "The Blue Note",
            address: "456 Elm St, Anytown, USA",
            squareFootage: 5000,
            maximumOccupancy: 750
        },
        {
            id: 3,
            name: "The Electric Ballroom",
            address: "789 Oak St, Anytown, USA",
            squareFootage: 12000,
            maximumOccupancy: 2000
        },
        {
            id: 4,
            name: "The Starlight Lounge",
            address: "1010 Pine St, Anytown, USA",
            squareFootage: 3000,
            maximumOccupancy: 400
        }

    ],
    bands:[
        {
            id: 1,
            name: "The Electric Serpents",
            numOfMembers: 4,
            genre: "psychedelic rock",
            yearFormed: 1967
        },
        {
            id: 2,
            name: "Midnight Mirage",
            numOfMembers: 3,
            genre: "synth-pop",
            yearFormed: 1985
        },
        {
            id: 3,
            name: "The Velvet Thorns",
            numOfMembers: 5,
            genre: "gothic metal",
            yearFormed: 1998
        },
        {
            id: 4,
            name: "The Cosmic Caravan",
            numOfMembers: 6,
            genre: "progressive rock",
            yearFormed: 1973
        },
        {
            id: 5,
            name: "Neon Visions",
            numOfMembers: 2,
            genre: "electronic dance music",
            yearFormed: 2010
        },
        {
            id: 6,
            name: "The Last Stand",
            numOfMembers: 4,
            genre: "hard rock",
            yearFormed: 2002
        },
        {
            id: 7,
            name: "Crystal Echoes",
            numOfMembers: 3,
            genre: "dream pop",
            yearFormed: 2016
        },
        {
            id: 8,
            name: "The Ghost Brigade",
            numOfMembers: 6,
            genre: "alternative rock",
            yearFormed: 1994
        },
        {
            id: 9,
            name: "Lunar Haze",
            numOfMembers: 5,
            genre: "space rock",
            yearFormed: 1989
        }
    ]
}


export const getBookings = () =>{
    return database.bookings.map(booking => ({...booking}))
}

export const getBands = () =>{
    return database.bands.map(band => ({...band}))
}

export const getVenues = () =>{
    return database.venues.map(venue => ({...venue}))
}