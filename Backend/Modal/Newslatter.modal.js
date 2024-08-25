import mongoose from 'mongoose';

const NewslatterSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true }
});

const newslatter = mongoose.model("newslatter", NewslatterSchema);

export default newslatter;
