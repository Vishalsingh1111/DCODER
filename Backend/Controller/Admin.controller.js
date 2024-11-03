import Admin from "../Modal/Admin.modal.js";
import bcryptjs from 'bcryptjs';

// Create new admin
export const addnewadmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admindetail = await Admin.findOne({ username });
        if (admindetail) {
            return res.status(400).json({ message: "Username already exists" });
        }
        const hashpassword = await bcryptjs.hash(password, 10);

        const createdadmin = new Admin({
            username,
            password: hashpassword,
        });
        await createdadmin.save();
        res.status(201).json({
            message: "User Created Successfully",
            admin: {
                _id: createdadmin._id,
                username: createdadmin.username,
            }
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login
export const adminlogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username });

        if (!admin || !(await bcryptjs.compare(password, admin.password))) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        res.status(200).json({
            message: "Login Successful",
            admin: {
                _id: admin._id,
                // username: admin.username,
            }
        });
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ message: "Internal error" });
    }
};

// Get user details
export const admindetails = async (req, res) => {
    try {
        const admin = await Admin.find();
        res.status(200).json(admin);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Error fetching users" });
    }
};

// Delete a user
export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAdmin = await Admin.findByIdAndDelete(id);

        if (!deletedAdmin) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error deleting User:", error);
        res.status(500).json({ error: "Error deleting User" });
    }
};
