import mongoose from "mongoose";

const notecontentSchema = mongoose.Schema({
    id: { type: Number, required: true },
    header: { type: String, required: true },
    text: { type: String, required: true },
    statement: { type: String, required: false },
    substatement1: { type: String, required: false },
    statement2: { type: String, required: false },
    substatement2: { type: String, required: false },
    statement3: { type: String, required: false },
    substatement3: { type: String, required: false },
    example: { type: String, required: false },
    statement4: { type: String, required: false },
    substatement4: { type: String, required: false },
    code: { type: String, required: false },
    explanation: { type: String, required: false },
    statement5: { type: String, required: false },
    substatement5: { type: String, required: false },
    category: { type: String, required: true },
    image: { type: String, required: false },
    figtitle: { type: String, required: false }
});

notecontentSchema.index({ header: 'text', text: 'text', category: 'text' });

const NoteContent = mongoose.model("NoteContent", notecontentSchema);
export default NoteContent;

