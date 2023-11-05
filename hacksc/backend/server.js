// server.js
const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3001;

app.use(express.json());

app.post('/submit-prompt', (req, res) => {
  const { prompt } = req.body;

  // Call the Python script
  const pythonProcess = spawn('python', ['./selenium_test.py', prompt]);

  pythonProcess.stdout.on('data', (data) => {
    const result = data.toString();
    res.json({ result });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
