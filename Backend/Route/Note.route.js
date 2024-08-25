import express from "express";
import { getNotes, createNote, updateNote, deleteNote } from "../Controller/Note.controller.js";

const router = express.Router();

// GET all notes
router.get("/", getNotes);

// POST create a new note
router.post("/", createNote);

// PUT update a note by ID
router.put("/:id", updateNote);

// DELETE delete a note by ID
router.delete("/:id", deleteNote);

export default router;
