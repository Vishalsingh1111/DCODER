import express from 'express';
import Project from '../Modal/Project.modal.js';
import Blog from '../Modal/Blog.modal.js';
import SheetProblem from '../Modal/sheetproblem.modal.js';

const router = express.Router();

// Create text indexes for search functionality
const createIndexes = async () => {
    await Project.createIndexes({ header: 'text', text: 'text', feature: 'text' });
    await Blog.createIndexes({ header: 'text', code: 'text', explanation: 'text', category: 'text' });
    await SheetProblem.createIndexes({ name: 'text', article: 'text', Level: 'text', topic: 'text' });
};

createIndexes();

router.get('/search', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        const projects = await Project.find({ $text: { $search: query } });
        const blogs = await Blog.find({ $text: { $search: query } });
        const sheetProblems = await SheetProblem.find({ $text: { $search: query } });

        const results = [
            ...projects.map(item => ({ ...item._doc, type: 'project' })),
            ...blogs.map(item => ({ ...item._doc, type: 'blog' })),
            ...sheetProblems.map(item => ({ ...item._doc, type: 'sheetProblem' }))
        ];

        res.json(results);
    } catch (error) {
        console.error('Error searching:', error);
        res.status(500).json({ message: 'Error searching' });
    }
});

router.get('/suggestions', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ message: 'Query is required' });
    }

    try {
        const projectSuggestions = await Project.find({ header: new RegExp(query, 'i') }).limit(7);
        const blogSuggestions = await Blog.find({ header: new RegExp(query, 'i') }).limit(7);
        const sheetProblemSuggestions = await SheetProblem.find({ name: new RegExp(query, 'i') }).limit(7);

        const suggestions = [
            ...projectSuggestions.map(item => ({ ...item._doc, type: 'project' })),
            ...blogSuggestions.map(item => ({ ...item._doc, type: 'blog' })),
            ...sheetProblemSuggestions.map(item => ({ ...item._doc, type: 'sheetProblem' }))
        ];

        res.json(suggestions);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        res.status(500).json({ message: 'Error fetching suggestions' });
    }
});

export default router;
