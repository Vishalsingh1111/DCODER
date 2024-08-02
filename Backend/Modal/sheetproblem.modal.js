import mongoose from "mongoose";

const sheetproblemSchema = mongoose.Schema({
    name: { type: String, required: true },
    article: { type: String, required: false },
    Level: { type: String, required: false },
    link: { type: String, required: false },
    topic: { type: String, required: true },
    id: { type: Number, required: true }
});

sheetproblemSchema.index({ name: 'text', article: 'text', Level: 'text', topic: 'text' });

const SheetProblem = mongoose.model("SheetProblem", sheetproblemSchema);
export default SheetProblem;

