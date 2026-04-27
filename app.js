const express = require('express');
const app = express();
const port = 3000;

// Root endpoint: Returns "Hello DevOps" as required
app.get('/', (req, res) => {
  res.send('Hello DevOps');
});

// Health endpoint: Returns status check as required
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'UP', 
    timestamp: new Date().toISOString(),
    message: 'System is healthy'
  });
});

app.listen(port, () => {
  console.log(`Application running at http://localhost:${port}`);
});