const chalk = require('chalk');

function log(...args) {
  return console.log('📦 ', chalk.cyan(...args));
}

module.exports = log;
