import express from 'express';
import { adminlogin, addnewadmin, admindetails, deleteAdmin } from '../Controller/Admin.controller.js';

const router = express.Router();

// Login route
router.post("/login", adminlogin);

//new admin
router.post("/addadmin", addnewadmin);

//get admin
router.get("/", admindetails);

//new admin
router.delete("/:id", deleteAdmin);

export default router;
