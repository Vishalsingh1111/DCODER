// Controller/Viewercount.controller.js
import View from '../Modal/Viewercount.modal.js';

// Increment view count for a page
export const incrementViewCount = async (req, res) => {
    const pageId = req.body.pageId; // Get the pageId from the request body

    try {
        const view = await View.findOneAndUpdate(
            { pageId },
            { $inc: { count: 1 } },
            { new: true, upsert: true }
        );
        res.json({ success: true, count: view.count });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error updating view count' });
    }
};

// Get view count for a page
export const getViewCount = async (req, res) => {
    const pageId = req.params.pageId; // Get the pageId from the request params

    try {
        const view = await View.findOne({ pageId });
        res.json({ success: true, count: view ? view.count : 0 });
    } catch (error) {
        res.status(500).json({ success: false, error: 'Error fetching view count' });
    }
};
