
const express = require('express');
const app = express();

// offset port by 200 - 1, so it's not the same as react port
// and for some reason it's 200 here
const port = process.env.PORT ? process.env.PORT - 199 : 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

const server = app.listen(port, () => {
  console.log(`listening on port ${server.address().port}`);
});