import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const handleChatRequest = async (req, res) => {
    const { prompt } = req.body;
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response.text(); // Await the text content
        res.send({ text: response }); // Send the text as part of an object
    } catch (error) {
        console.error('Error generating content:', error.message);
        res.status(500).send({ error: 'Failed to generate content', details: error.message });
    }
};

export default handleChatRequest;
