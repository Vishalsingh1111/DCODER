import Note from "../Modal/note.modal.js";

// Get all notes
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ error: "Error fetching notes" });
    }
};

// Create a new note
export const createNote = async (req, res) => {
    try {
        const { id, link, name, category, title, price, image } = req.body;
        const newNote = new Note({
            id,
            link,
            name,
            category,
            title,
            price,
            image
        });
        await newNote.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};

// Update a note by ID
export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { link, name, category, title, price, image } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { link, name, category, title, price, image },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedNote });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Error updating note" });
    }
};

// Delete a note by ID
export const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};