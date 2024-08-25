import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import bodyParser from "body-parser";

// Route imports
import noteRoute from "./Route/Note.route.js";
import sheetRoute from "./Route/Sheet.route.js";
import sheetproblemRoute from "./Route/Sheetproblem.route.js";
import projectRoute from "./Route/Project.route.js";
import blogRoute from "./Route/Blog.route.js";
import notecontentRoute from "./Route/NoteContent.route.js";
import userRoute from "./Route/User.route.js";
import contactRoute from "./Route/Contact.route.js";
import AdminRoute from "./Route/Admin.route.js";
import newslatterRoute from './Route/Newslatter.route.js';
import searchRoute from './Route/Search.route.js';
import commentRoute from './Route/Comment.route.js';

// Controller imports
import { googleLogin, googleCallback, googleCallbackRedirect } from './Controller/Googleuser.controller.js';

// Chat AI import
import handleChatRequest from './Controller/Ai.controller.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
const SESSION_SECRET = process.env.SESSION_SECRET;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Session settings
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

// Setup passport
app.use(passport.initialize());
app.use(passport.session());

// Google OAuth routes
app.get("/auth/google", googleLogin);
app.get("/auth/google/callback", googleCallback, googleCallbackRedirect);

// Connect to MongoDB
mongoose.connect(URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("MongoDB connection error:", error));

// API Routes
app.use("/note", noteRoute);
app.use("/sheet", sheetRoute);
app.use("/sheetproblem", sheetproblemRoute);
app.use("/project", projectRoute);
app.use("/blog", blogRoute);
app.use("/notecontent", notecontentRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/admin", AdminRoute);
app.use("/newslatter", newslatterRoute);
app.use("/search", searchRoute);
app.use("/comment", commentRoute);

// Chat route
app.post('/chat', handleChatRequest);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
