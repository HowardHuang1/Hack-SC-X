const express = require("express");
const { spawn } = require('child_process');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const { prompt } = req.body;
    console.log("prompt is: " + prompt);

    const pythonProcess = spawn('python', ['./selenium_test.py', prompt]);

    pythonProcess.stdout.on('data', (data) => {
        const result = data.toString();
        res.json({result});
    });
    console.log(result);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
