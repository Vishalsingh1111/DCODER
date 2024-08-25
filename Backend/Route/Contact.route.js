import express from 'express';
import { contactInfo, getMessage } from '../Controller/Contact.controller.js';
const router = express.Router()

//store all contact info
router.post("/contactinfo", contactInfo);

// get all user
router.get("/", getMessage);

export default router;