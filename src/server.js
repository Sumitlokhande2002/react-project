const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes

// Alternatively, enable CORS for specific routes
app.get('/data', cors(), (req, res) => {
  res.json({ message: 'This route has CORS enabled' });
});

app.listen(1234, () => {
  console.log('Server is running on port 1234');
});
