import  { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//const prompt = "what is time complexity?";
// const image = {
//   inlineData: {
//     data: Buffer.from(fs.readFileSync("cookie.png")).toString("base64"),
//     mimeType: "image/png",
//   },
// };
const runPrompt = async (prompt) => {
    const result = await model.generateContent([prompt]);
    return result.response.text();
};

export {runPrompt};
