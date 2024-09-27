import express from "express";

//SDE Problem
import { getSDEProblem, createSDEProblem, updateSDEProblem, deleteSDEProblem } from "../Controller/SDEProblem.controller.js"

const router = express.Router();

//SDE PROBLEM

//get all problem
router.get('/', getSDEProblem);

//POST create new problems
router.post('/', createSDEProblem);

// PUT update a note by ID
router.put("/:id", updateSDEProblem);

// DELETE delete a note by ID
router.delete("/:id", deleteSDEProblem);

export default router;