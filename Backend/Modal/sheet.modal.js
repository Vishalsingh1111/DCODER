import mongoose from "mongoose";

const sheetSchema = mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, require: true },
    Problems: { type: Number, require: false },
    Topic: { type: String, require: false }
});

sheetSchema.index({ name: 'text', category: 'text' });

const Sheet = mongoose.model("Sheet", sheetSchema);
export default Sheet;
