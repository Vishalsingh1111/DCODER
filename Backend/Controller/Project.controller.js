import Project from "../Modal/Project.modal.js";

export const getProject = async (req, res) => {
    try {
        const project = await Project.find();
        res.status(200).json(project);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json(error);
    }
};

export const createProject = async (req, res) => {
    try {
        const { id, header, text, statement, substatement1, substatement3, code1, code2, code3, code4, statement2, feature, substatement2, explain, note,
            image1, image2, image3, image4, category, figtitle, link1, link2 } = req.body;
        const newproject = new Project({
            id,
            header,
            text,
            statement,
            substatement1,
            substatement3,
            code1,
            code2,
            code3,
            code4,
            statement2,
            feature,
            substatement2,
            explain,
            note,
            image1,
            image2,
            image3,
            image4,
            category,
            figtitle,
            link1,
            link2
        });
        await newproject.save();
        res.status(201).json({ message: "Created successfully" });
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ error: "Error creating note" });
    }
};


// Update a note by ID
export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { header, text, statement, substatement1, substatement3, code1, code2, code3, code4, statement2, feature, substatement2, explain, note,
        image1, image2, image3, image4, category, figtitle, link1, link2 } = req.body;

    try {
        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                header, text, statement, substatement1, substatement3, code1, code2, code3, code4, statement2, feature, substatement2, explain, note,
                image1, image2, image3, image4, category, figtitle, link1, link2
            },
            { new: true }
        );

        if (!updatedProject) {
            return res.status(404).json({ error: "Content not found" });
        }

        res.status(200).json({ message: "Content Updated successfully", updatedProject });
    } catch (error) {
        console.error("Error updating Content:", error);
        res.status(500).json({ error: "Error updating Content" });
    }
};

// Delete a note by ID
export const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ error: "Error deleting note" });
    }
};