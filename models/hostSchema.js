import mongoose from 'mongoose';
import commentsSchema from './commentsSchema'
const { Schema } = mongoose;

const hostSchema = new Schema({
    location: String,
    numberOfGuests: Number,
    rating: Number,
    placeOffered: [placesToStaySchema],
    wantsForBreakfast: String,
    comments: [commentsSchema]
})

export default hostSchema;