import mongoose from "mongoose";

const ContestSchema = mongoose.Schema({
    id: { type: Number, required: true },
    header: { type: String, required: false },
    code: { type: String, required: false },
    explanation: { type: String, required: false },
    image: { type: String, required: false },
    category: { type: String, required: true }
});

ContestSchema.index({ header: 'text', code: 'text', explanation: 'text', category: 'text' });

const Contest = mongoose.model("contest", ContestSchema);
export default Contest;
