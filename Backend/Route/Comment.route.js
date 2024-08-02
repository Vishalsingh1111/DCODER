import express from "express";
import { createComment, getComments } from "../Controller/Comment.controller.js";

const router = express.Router();

// Route to create a new comment
router.post("/", createComment);

// Route to get all comments
router.get("/", getComments);

export default router;

