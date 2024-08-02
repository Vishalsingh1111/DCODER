import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    id: { type: Number, required: true },
    header: { type: String, required: false },
    code: { type: String, required: false },
    explanation: { type: String, required: false },
    category: { type: String, required: true }
});

blogSchema.index({ header: 'text', code: 'text', explanation: 'text', category: 'text' });

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;

