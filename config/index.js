const nconf = require('nconf');

nconf
  .argv()
  .env()
  .file({ file: `${__dirname}/appconfig.json` });

nconf.required(['database', 'server']);

module.exports = nconf;
