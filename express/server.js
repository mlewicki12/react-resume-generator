
const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');

const DEVELOPER = true;
const TEMPLATES_DIR = 'templates';

const app = express();
app.use(fileupload({
  safeFileNames: true,
  debug: DEVELOPER
}));

app.use(express.static(path.join(__dirname, 'public')));

// offset port by 200 - 1, so it's not the same as react port
// and for some reason it's 200 here
const port = process.env.PORT ? process.env.PORT - 199 : 3000;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let template = req.files.template;

  template.mv(path.join(__dirname, TEMPLATES_DIR, `${template.name.slice(0, -3)}.rtx`), function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

const server = app.listen(port, () => {
  console.log(`listening on port ${server.address().port}`);
});