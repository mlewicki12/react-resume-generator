
const express = require('express');
const fileupload = require('express-fileupload');
const path = require('path');

const Template = require('./template.js');
const Resume = require('./resume.js');

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

    const templatePath = path.join(__dirname, TEMPLATES_DIR, `${template.name.slice(0, -3)}`);

    const templateObj = new Template(`${templatePath}.rtx`, templatePath);
    templateObj.load().then(() => {
      const resumeObj = new Resume(path.join(__dirname, 'definition.json'));
      resumeObj.create(templateObj.templates)
        .then(data => {
          console.log('gay', data);
          res.send(data);
        })
        .catch(err => {
          console.log('faggot', err);
          res.send(err)
        });
    });
  });
});

const server = app.listen(port, () => {
  console.log(`listening on port ${server.address().port}`);
});