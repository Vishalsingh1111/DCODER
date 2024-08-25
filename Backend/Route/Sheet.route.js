import express from "express";

import { getSheet, createSheet, updateSheet, deleteSheet } from "../Controller/sheet.controller.js"

const router = express.Router();
// get all card
router.get('/', getSheet);

// POST create a new note
router.post("/", createSheet);

// PUT update a note by ID
router.put("/:id", updateSheet);

// DELETE delete a note by ID
router.delete("/:id", deleteSheet);


export default router;