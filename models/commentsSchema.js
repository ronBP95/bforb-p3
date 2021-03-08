import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentsSchema = new Schema({
    user: String,
    createdAt: Date,
    rating: Number,
    comment: String
})

export default commentsSchema;