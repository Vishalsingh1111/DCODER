import NoteContent from "../Modal/NoteContent.modal.js";

export const getnoteContent = async (req, res) => {
    try {
        const notecontent = await NoteContent.find();
        res.status(200).json(notecontent);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

// Create a new note
export const createnoteContent = async (req, res) => {
    try {
        const { id, header, text, statement, substatement1, statement2, substatement2, statement3, substatement3, example, statement4, substatement4, code, explanation, statement5, substatement5, category, image, figtitle } = req.body;
        const newNote = new NoteContent({
            id,
            header,
            text,
            statement,
            substatement1,
            statement2,
            substatement2,
            statement3,
            substatement3,
            example,
            statement4,
            substatement4,
            code,
            explanation,
            statement5,
            substatement5,
            category,
            image,
            figtitle
        });
        await newNote.save();
        res.status(201).json({ message: "Content Added successfully" });
    } catch (error) {
        console.error("Error creating note", error);
        res.status(500).json({ error: "Error creating note" });
    }
};


// Update a note by ID
export const updatenoteContent = async (req, res) => {
    const { id } = req.params;
    const { header, text, statement, substatement1, statement2, substatement2, statement3, substatement3, example, statement4, substatement4, code, explanation, statement5, substatement5, category, image, figtitle } = req.body;

    try {
        const updatedNoteContent = await NoteContent.findByIdAndUpdate(
            id,
            { header, text, statement, substatement1, statement2, substatement2, statement3, substatement3, example, statement4, substatement4, code, explanation, statement5, substatement5, category, image, figtitle },
            { new: true }
        );

        if (!updatedNoteContent) {
            return res.status(404).json({ error: "Content not found" });
        }

        res.status(200).json({ message: "Content Updated successfully", updatedNoteContent });
    } catch (error) {
        console.error("Error updating Content:", error);
        res.status(500).json({ error: "Error updating Content" });
    }
};

// Delete a note by ID
export const deletenoteContent = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedNoteContent = await NoteContent.findByIdAndDelete(id);

        if (!deletedNoteContent) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};