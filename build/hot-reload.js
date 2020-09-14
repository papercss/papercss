const util = require('util');
const path = require('path');
const sass = require('sass');
const write = require('write');
const postcss = require('postcss');
const chokidar = require('chokidar');
const autoprefixer = require('autoprefixer');

const log = require('./log');

const sassRenderPromisified = util.promisify(sass.render);

const entrypoint = path.resolve(__dirname, '../src/styles.scss');
const paperDocsPath = path.resolve(__dirname, '../docs/static/assets/paper.css');

chokidar.watch('./src/**/*.scss').on('change', (event, path) => {
  log(`Detected file change (${event}), re-building compiled CSS...`);

  sassRenderPromisified({ file: entrypoint })
    .then((compiledCSS) => postcss([autoprefixer]).process(compiledCSS.css.toString(), { from: undefined }))
    .then((autoprefixedCSS) => write(paperDocsPath, autoprefixedCSS.css))
    .then(() => log('Re-built compiled CSS.'));
});
