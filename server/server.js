import express from 'express';
import cors from 'cors';
import {runPrompt} from "./gemini_1.5_flash.js";

const app = express();

app.use(express.json());
app.use(cors());

app.post('/check', async (req, res) => {
    const receivedData = req.body; 
    console.log('Received data:', receivedData);
    // const query = receivedData.config.data;
    // console.log(query);
    let data = await runPrompt(receivedData.prompt);

    res.json({ message: 'Data received successfully', data: data });
});

app.listen(5000, () => {
    console.log(`App running on port 5000`);
});
