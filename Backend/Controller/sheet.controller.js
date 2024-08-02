
import Sheet from "../Modal/sheet.modal.js";

export const getSheet = async (req, res) => {
    try {
        const sheet = await Sheet.find();
        res.status(200).json(sheet);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

// Create a new note
export const createSheet = async (req, res) => {
    try {
        const { name, category, Problems, Topic } = req.body;
        const newNote = new Sheet({
            name,
            category,
            Problems,
            Topic
        });
        await newNote.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};


// Update a note by ID
export const updateSheet = async (req, res) => {
    const { id } = req.params;
    const { name, category, Problems, Topic } = req.body;

    try {
        const updatedSheet = await Sheet.findByIdAndUpdate(
            id,
            { name, category, Problems, Topic },
            { new: true }
        );

        if (!updatedSheet) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedSheet });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Error updating note" });
    }
};


// Delete a note by ID
export const deleteSheet = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedSheet = await Sheet.findByIdAndDelete(id);

        if (!deletedSheet) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};
