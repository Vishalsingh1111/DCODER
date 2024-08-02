import express from "express";

import { getSheetproblem, createSheetproblem, updateSheetproblem, deleteSheetproblem } from "../Controller/sheetproblem.controller.js"

const router = express.Router();

//get all problem
router.get('/', getSheetproblem);

//POST create new problems
router.post('/', createSheetproblem);

// PUT update a note by ID
router.put("/:id", updateSheetproblem);

// DELETE delete a note by ID
router.delete("/:id", deleteSheetproblem);

export default router;