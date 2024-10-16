import Contest from "../Modal/ContestSol.modal.js";

// Get all contests
export const getContest = async (req, res) => {
    try {
        const contests = await Contest.find(); // Renamed to 'contests'
        res.status(200).json(contests);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

// Create a new contest
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
        console.error("Error creating contest:", error);
        res.status(500).json({ error: "Error creating contest" });
    }
};

// Update a contest by ID
export const updateContest = async (req, res) => {
    const { id } = req.params;
    const { header, code, explanation, image, category } = req.body;

    try {
        const updatedContest = await Contest.findOneAndUpdate(
            { id },  // Uses 'id' field from your schema, not MongoDB's '_id'
            { header, code, explanation, image, category },
            { new: true }
        );

        if (!updatedContest) {
            return res.status(404).json({ error: "Contest not found" });
        }

        res.status(200).json({ message: "Updated successfully", updatedContest });
    } catch (error) {
        console.error("Error updating contest:", error);
        res.status(500).json({ error: "Error updating contest" });
    }
};

// Delete a contest by ID
export const deleteContest = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedContest = await Contest.findOneAndDelete({ id }); // Uses 'id' field

        if (!deletedContest) {
            return res.status(404).json({ error: "Contest not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting contest:", error);
        res.status(500).json({ error: "Error deleting contest" });
    }
};
