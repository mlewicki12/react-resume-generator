
const adm_zip = require('adm-zip');
const path = require('path');
const fs = require('fs');

module.exports = class Template {
  components = [
    'extra', 'header', 'job', 'separator', 'summary', 'uni'
  ]

  constructor(file, dest) {
    var zip = adm_zip(file);

    zip.extractAllTo(dest, true);
    fs.unlinkSync(file);
    this.path = dest;
  }

  load() {
    this.templates = {};
    const promises = this.components.map(component => new Promise((resolve, reject) => {
      fs.readFile(path.join(this.path, `${component}.liquid`), 'utf8', (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve({type: component, data: data});
        }
      });
    }));

    return Promise.all(promises).then(values => {
      values.forEach(value => {
        this.templates[value.type] = value.data;
      });
    });
  }
}