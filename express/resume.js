
const { Liquid } = require('liquidjs');
const fs = require('fs');

const engine = new Liquid();

module.exports = class Resume {
  constructor(definition) {
    var data = fs.readFileSync(definition, 'utf-8');
    this.definition = JSON.parse(data);
  }

  async create(template) {
    this.render = '';

    for(var i = 0; i < this.definition.length; ++i) {
      const component = this.definition[i];

      const liquid = template[component.type];
      this.render += await engine.parseAndRender(liquid, component);
    }

    return this.render;
  }
}