import express from "express";

import { getnoteContent, createnoteContent, updatenoteContent, deletenoteContent } from "../Controller/NoteContent.controller.js";

const router = express.Router();

// Get all content
router.get('/', getnoteContent);

// POST create a ncontent
router.post("/", createnoteContent);

// PUT update a note by ID
router.put("/:id", updatenoteContent);

// DELETE delete a note by ID
router.delete("/:id", deletenoteContent);

export default router;