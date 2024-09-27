import express from "express";

import { getSheetproblem, createSheetproblem, updateSheetproblem, deleteSheetproblem } from "../Controller/sheetproblem.controller.js"

//SDE Problem
import { getSDEproblem, createSDEProblem, updateSDEproblem, deleteSDEproblem } from "../Controller/SDEProblem.controller.js"

const router = express.Router();

//get all problem
router.get('/', getSheetproblem);

//POST create new problems
router.post('/', createSheetproblem);

// PUT update a note by ID
router.put("/:id", updateSheetproblem);

// DELETE delete a note by ID
router.delete("/:id", deleteSheetproblem);


//SDE PROBLEM

//get all problem
router.get('/', getSDEproblem);

//POST create new problems
router.post('/', createSDEProblem);

// PUT update a note by ID
router.put("/:id", updateSDEproblem);

// DELETE delete a note by ID
router.delete("/:id", deleteSDEproblem);

export default router;