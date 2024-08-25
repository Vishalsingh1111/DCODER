import express from 'express';
import { signup, login, userdetails, deleteUser } from '../Controller/User.controller.js';
const router = express.Router()

//signup 
router.post("/signup", signup);

//login
router.post("/login", login);

// get all user
router.get("/", userdetails);

//deleteUser
router.delete("/:id", deleteUser);


export default router;