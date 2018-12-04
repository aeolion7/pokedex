const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port 4000');
});
