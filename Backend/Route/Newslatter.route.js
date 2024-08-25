import express from "express";
import { subscribeNewslatter, getsubscribeNewslatter, deletesubscriber } from "../Controller/Newslatter.controller.js";

const router = express.Router();

// Create new content 
router.post('/subscribe', subscribeNewslatter);

// Create new content 
router.get('/', getsubscribeNewslatter);

// delete subscriber
router.delete('/:id', deletesubscriber);
export default router;
