import express from "express";

import { getContest, createContest, updateContest, deleteContest } from "../Controller/ContestSol.controller.js";

const router = express.Router();

// Get all contests
router.get('/', getContest);

// Create new contest
router.post('/', createContest);

// Update a contest by ID
router.put("/:id", updateContest);

// Delete a contest by ID
router.delete("/:id", deleteContest);

export default router;
