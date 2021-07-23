
const { Liquid } = require('liquidjs');
const yaml = require('js-yaml');
const path = require('path');
const fs = require('fs');

const LAYOUTS_DIR = 'layouts';

const engine = new Liquid({
  dynamicPartials: false,
  root: path.join(__dirname, LAYOUTS_DIR)
});

module.exports = class Resume {
  constructor(definition) {
    try {
      var data = fs.readFileSync(definition, 'utf-8');
      this.definition = yaml.load(data);
    } catch(e) {
      console.error(e);
    }
  }

  async create(template) {
    this.render = '{% layout root.liquid %}\n{% block content %}';

    for(var i = 0; i < this.definition.length; ++i) {
      const component = this.definition[i];

      const liquid = template.components[component.type];

      // can't do this all in one go bc variable names are reused
      this.render += await engine.parseAndRender(liquid, component);
    }

    this.render += '\n{% endblock %}';
    this.render = await engine.parseAndRender(this.render, {});

    const folderName = `${Date.now()}`;
    const folderPath = path.join(__dirname, 'public', 'resumes', folderName);
    fs.mkdirSync(folderPath);

    fs.copyFile(path.join(__dirname, 'photo.jpg'), path.join(folderPath, 'photo.jpg'), (err, data) => {
      if(err) {
        console.error(err);
      }
    });

    fs.copyFile(path.join(template.path, 'style.css'), path.join(folderPath, 'style.css'), (err, data) => {
      if(err) {
        console.error(err);
      }
    });

    fs.writeFile(path.join(folderPath, 'index.html'), this.render, (err, data) => {
      if(err) {
        console.error(err);
      }
    });

    return folderName;
  }
}