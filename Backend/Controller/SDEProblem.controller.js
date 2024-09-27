
import SDEProblem from "../Modal/SDEProblem.modal.js";

export const getSDEProblem = async (req, res) => {
    try {
        const sheetproblem = await SDEProblem.find();
        res.status(200).json(sheetproblem);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

export const createSDEProblem = async (req, res) => {
    try {
        const { link, name, article, Level, id, companies, contentFor, topic } = req.body;
        const newSDEProb = new SDEProblem({
            name,
            article,
            Level,
            link,
            topic,
            companies,
            contentFor,
            id
        });
        await newSDEProb.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};


// Update a note by ID
export const updateSDEProblem = async (req, res) => {
    const { id } = req.params;
    const { link, name, article, Level, topic, companies, contentFor, } = req.body;

    try {
        const updatedsdeproblem = await SDEProblem.findByIdAndUpdate(
            id,
            { link, name, article, Level, topic, companies, contentFor },
            { new: true }
        );

        if (!updatedsdeproblem) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedsdeproblem });
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Error updating note" });
    }
};

// Delete a note by ID
export const deleteSDEProblem = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedsdeProblem = await SDEProblem.findByIdAndDelete(id);

        if (!deletedsdeProblem) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};