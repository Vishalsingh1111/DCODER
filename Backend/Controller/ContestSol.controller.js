import Contest from "../Modal/ContestSol.modal.js";

export const getContest = async (req, res) => {
    try {
        const Contest = await Contest.find();
        res.status(200).json(Contest);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

export const createContest = async (req, res) => {
    try {
        const { id, header, code, image, explanation, category } = req.body;
        const newContest = new Contest({
            id,
            header,
            code,
            explanation,
            category,
            image,
        });
        await newContest.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};

// Update a note by ID
export const updateContest = async (req, res) => {
    const { id } = req.params;
    const { header, code, explanation, image, category } = req.body;

    try {
        const updatedContest = await Contest.findByIdAndUpdate(
            id,
            { header, code, explanation, image, category },
            { new: true }
        );

        if (!updatedContest) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedContest });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Error updating note" });
    }
};

// Delete a note by ID
export const deleteContest = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContest = await Contest.findByIdAndDelete(id);

        if (!deletedContest) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};