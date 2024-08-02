import Comment from "../Modal/Comment.modal.js";

//Create a new comment
export const createComment = async (req, res) => {
    try {
        const { name, comment } = req.body;
        const newComment = new Comment({ name, comment });
        await newComment.save();
        res.status(201).json({ message: "Comment created successfully", data: newComment });
    } catch (error) {
        res.status(500).json({ message: "Error creating comment", error: error.message });
    }
};


// Get all comments
export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find().sort({ time: -1 });
        res.status(200).json({ message: "Comments fetched successfully", data: comments });
    } catch (error) {
        res.status(500).json({ message: "Error fetching comments", error: error.message });
    }
};
