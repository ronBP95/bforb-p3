import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    userPhoto: String,
    locations: String,
    aboutMe: String,
    whyTravel: String,
    favBreakfast: String,
    memberSince: Date,
    isGuest: Boolean,
    isHost: Boolean,
    guest: [guestSchema],
    host: [hostSchema]
})

const guestSchema = new Schema({
    numberOfStays: Number,
    rating: Number,
    wantsToMake: String,
    comments: [commentsSchema]
})

const hostSchema = new Schema({
    location: String,
    numberOfGuests: Number,
    rating: Number,
    placeOffered: [placesToStaySchema],
    wantsForBreakfast: String,
    comments: [commentsSchema]
})

const commentsSchema = new Schema({
    user: String,
    createdAt: Date,
    rating: Number,
    comment: String
})

const placesToStaySchema = new Schema({
    location: String,
    bedPhoto: String,
    description: String,
    rating: Number
})
