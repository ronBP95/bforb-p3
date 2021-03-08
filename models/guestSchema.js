import mongoose from 'mongoose';
import commentsSchema from './commentsSchema'
const { Schema } = mongoose;


const guestSchema = new Schema({
    numberOfStays: Number,
    rating: Number,
    wantsToMake: String,
    comments: [commentsSchema]
})

export default guestSchema;