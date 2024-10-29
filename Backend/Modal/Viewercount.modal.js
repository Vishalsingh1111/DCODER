// models/View.js
import mongoose from 'mongoose';

const viewSchema = new mongoose.Schema({
    pageId: { type: String, required: true, unique: true },
    count: { type: Number, default: 0 }
});

const View = mongoose.model('View', viewSchema);

export default View;
