const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.MOCK_API_PORT || 4000;

app.use(cors());
app.use(express.json());

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the mock API!' });
});

// Add more endpoints as needed

app.listen(PORT, () => {
  // All console.log and console.error statements removed
});
