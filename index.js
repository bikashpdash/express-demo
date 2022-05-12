const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.get('/', (req, res) => {
  res.send('Hello World !!');
});
app.get('/emp', (req, res) => {
  res.send('Employee List.');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
