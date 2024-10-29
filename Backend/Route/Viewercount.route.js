// Route/Viewercount.route.js
import express from 'express';
import { incrementViewCount, getViewCount } from '../Controller/Viewercount.controller.js';

const router = express.Router();

// Route to increment view count for a page
router.post('/increment', incrementViewCount);

// Route to get current view count for a page
router.get('/:pageId', getViewCount);

export default router; // Use export default
