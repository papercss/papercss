const util = require('util');
const sass = require('sass');
const write = require('write');
const postcss = require('postcss');
const chokidar = require('chokidar');
const autoprefixer = require('autoprefixer');

const constants = require('./constants');
const log = require('./log');

const sassRenderPromisified = util.promisify(sass.render);

function compile() {
  sassRenderPromisified({ file: constants.ENTRYPOINT_PATH })
    .then((compiledCSS) => postcss([autoprefixer]).process(compiledCSS.css.toString(), { from: undefined }))
    .then((autoprefixedCSS) => write(constants.PAPER_DOCS_PATH, autoprefixedCSS.css))
    .then(() => log('Compiled CSS in docs/ folder.'));
}

chokidar.watch('./src/**/*.scss').on('change', (event) => {
  log(`Detected file change (${event}), compiling SCSS to CSS...`);
  compile();
});

// Do initial compilation.
compile();
