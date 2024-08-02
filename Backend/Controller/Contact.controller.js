import Contact from "../Modal/Contact.modal.js";

export const contactInfo = async (req, res) => {
    try {
        const { firstname, lastname, email, phonenumber, message } = req.body;
        const storedData = new Contact({
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            message: message,
        })
        await storedData.save();
        res.status(201).json({
            message: "Detail Submitted Successfully!"
        })
    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({ message: "Fill required details" })
    }
}

//get user deatils
export const getMessage = async (req, res) => {
    try {
        const message = await Contact.find();
        res.status(200).json(message);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Error fetching users" });
    }
};