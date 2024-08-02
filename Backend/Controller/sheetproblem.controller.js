
import Sheetproblem from "../Modal/sheetproblem.modal.js";

export const getSheetproblem = async (req, res) => {
    try {
        const sheetproblem = await Sheetproblem.find();
        res.status(200).json(sheetproblem);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

export const createSheetproblem = async (req, res) => {
    try {
        const { link, name, article, Level, id, topic } = req.body;
        const newNote = new Sheetproblem({
            name,
            article,
            Level,
            link,
            topic,
            id
        });
        await newNote.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};


// Update a note by ID
export const updateSheetproblem = async (req, res) => {
    const { id } = req.params;
    const { link, name, article, Level, topic } = req.body;

    try {
        const updatedSheetproblem = await Sheetproblem.findByIdAndUpdate(
            id,
            { link, name, article, Level, topic },
            { new: true }
        );

        if (!updatedSheetproblem) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedSheetproblem });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Error updating note" });
    }
};

// Delete a note by ID
export const deleteSheetproblem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSheetproblem = await Sheetproblem.findByIdAndDelete(id);

        if (!deletedSheetproblem) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};