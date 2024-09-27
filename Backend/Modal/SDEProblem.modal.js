import mongoose from "mongoose";

const SDEProblemSchema = mongoose.Schema({
    name: { type: String, required: true },
    article: { type: String, required: false },
    Level: { type: String, required: false },
    link: { type: String, required: false },
    topic: { type: String, required: true },
    companies: { type: String, required: false },
    contentFor: { type: String, required: false },
    id: { type: Number, required: true }
});

SDEProblemSchema.index({ name: 'text', article: 'text', Level: 'text', topic: 'text' });

const SDEProblem = mongoose.model("SDEProblem", SDEProblemSchema);
export default SDEProblem;

