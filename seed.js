//users

// name: String,
// userPhoto: String,
// locations: String,
// aboutMe: String,
// whyTravel: String,
// favBreakfast: String,
// memberSince: Date,
// isGuest: Boolean,
// isHost: Boolean,
// guest: [guestSchema],
// host: [hostSchema]

[
    {
        name: 'Don Draper',
        userPhoto: 'http://',
        location: 'New York City',
        aboutMe: "I drink a lot and I never work out but still have John Hamm's body.",
        whyTravel: 'I like to see the country and also I live a double life.',
        favBreakfast: 'Whiskey and eggs',
        memberSince: Date.now,
        isGuest: true,
        isHost: false,
        guest: [guestSchema],
        host: [hostSchema]
    },

    {
        name: 'Peggy Olson',
        userPhoto: 'http://',
        location: 'New York City',
        aboutMe: "Work work work.",
        whyTravel: 'I need a vacation.',
        favBreakfast: 'Juevos rancheros',
        memberSince: Date.now,
        isGuest: true,
        isHost: false,
        guest: [guestSchema],
        host: [hostSchema]
    },
    
    {
        name: 'Eddie Murphy',
        userPhoto: 'http://',
        location: 'Los Angeles',
        aboutMe: "I'm a very famous comedian.",
        whyTravel: 'On the run.',
        favBreakfast: 'Breakfast burritos',
        memberSince: Date.now,
        isGuest: true,
        isHost: false,
        guest: [guestSchema],
        host: [hostSchema]
    },

    {
        name: 'Aaron Hernandez',
        userPhoto: 'http://',
        location: 'Wichita',
        aboutMe: "Software engineer. You better make me breakfast.",
        whyTravel: 'To see the sights and get free flights.',
        favBreakfast: 'Eggs Benedict and a mimosa',
        memberSince: Date.now,
        isGuest: true,
        isHost: true,
        guest: [guestSchema],
        host: [hostSchema]
    },

    {
        name: 'Ron Magpantay',
        userPhoto: 'http://',
        location: 'Los Angeles',
        aboutMe: "Software engineer. They call me Hollywood Ron.",
        whyTravel: 'Can\'t stand the LA winters.',
        favBreakfast: 'Juevos rancheros',
        memberSince: Date.now,
        isGuest: true,
        isHost: true,
        guest: [guestSchema],
        host: [hostSchema]
    },
    {
        
        name: 'Erik Grivalsky',
        userPhoto: 'http://',
        location: 'Albuquerque',
        aboutMe: "I mean well.",
        whyTravel: 'Water tastes different everywhere.',
        favBreakfast: 'Egg sammich',
        memberSince: Date.now,
        isGuest: true,
        isHost: true,
        guest: [guestSchema],
        host: [hostSchema]
        
    }
]