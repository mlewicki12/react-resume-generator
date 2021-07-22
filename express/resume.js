
const { Liquid } = require('liquidjs');
const path = require('path');
const fs = require('fs');

const LAYOUTS_DIR = 'layouts';

const engine = new Liquid({
  dynamicPartials: false,
  root: path.join(__dirname, LAYOUTS_DIR)
});

module.exports = class Resume {
  constructor(definition) {
    var data = fs.readFileSync(definition, 'utf-8');
    this.definition = JSON.parse(data);
  }

  async create(template) {
    this.render = '{% layout root.liquid %}\n{% block content %}';

    for(var i = 0; i < this.definition.length; ++i) {
      const component = this.definition[i];

      const liquid = template[component.type];

      // can't do this all in one go bc variable names are reused
      this.render += await engine.parseAndRender(liquid, component);
    }

    this.render += '\n{% endblock %}';
    this.render = await engine.parseAndRender(this.render, {});

    return this.render;
  }
}