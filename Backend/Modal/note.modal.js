// import mongoose from "mongoose";

// const noteSchema = mongoose.Schema({
//     id: { type: Number, required: true },
//     link: { type: String, required: true },
//     name: { type: String, required: true },
//     category: { type: String, required: true },
//     title: { type: String, required: true },
//     price: { type: Number, required: true },
//     image: { type: String, required: true }
// });

// const Note = mongoose.model("Note", noteSchema);

// export default Note;

import mongoose from 'mongoose';

// Define the schema
const noteSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    link: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }
});

// Add text index to searchable fields
noteSchema.index({ name: 'text', title: 'text', category: 'text' });

// Create the model
const Note = mongoose.model('Note', noteSchema);

export default Note;
