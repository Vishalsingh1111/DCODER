import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: false },
    password: { type: String, required: false },
    googleId: { type: String },
    // displayName: { type: String },
    photo: { type: String }

});

const User = mongoose.model('User', userSchema);

export default User;
