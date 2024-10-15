import express from "express";

import { getContest, createContest, updateContest, deleteContest } from "../Controller/ContestSol.controller.js";

const router = express.Router();

//get all data
router.get('/', getContest);

//create new data
router.post('/', createContest);

// PUT update a note by ID
router.put("/:id", updateContest);

// DELETE delete a note by ID
router.delete("/:id", deleteContest);

export default router;