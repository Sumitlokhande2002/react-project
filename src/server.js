const express = require('express');
const cors = require('cors');
const app = express();
const url = 'http://localhost:1234';
fetch(url)
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, CORS is enabled!');
});

const PORT = 1234;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
