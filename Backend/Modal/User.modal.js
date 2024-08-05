// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: false },
//     lastName: { type: String, required: false },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, required: false },
//     password: { type: String, required: false },
//     googleId: { type: String },
//     photo: { type: String }

// });

// const User = mongoose.model('User', userSchema);

// export default User;



import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, required: true, unique: true },
    phone: { type: String, default: null },
    password: { type: String, default: null },
    googleId: { type: String, default: null },
    photo: { type: String, default: null }
});

const User = mongoose.model('User', userSchema);

export default User;
