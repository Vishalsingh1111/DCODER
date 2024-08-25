import express from "express";

import { createProject, deleteProject, getProject, updateProject } from "../Controller/Project.controller.js";

const router = express.Router();

//get all content 
router.get('/', getProject);

//craete new content 
router.post('/', createProject);

// PUT update a note by ID
router.put("/:id", updateProject);

// DELETE delete a note by ID
router.delete("/:id", deleteProject);

export default router;