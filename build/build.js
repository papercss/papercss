const fs = require('fs');
const path = require('path');
const sass = require('sass');
const write = require('write');
const rimraf = require('rimraf');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const log = require('./log');

async function build() {
  const entrypoint = path.resolve(__dirname, '../src/styles.scss');
  const paperDocsPath = path.resolve(__dirname, '../docs/static/assets/paper.css');

  log('Starting PaperCSS build...');
  log('Cleaning "dist/, docs/static/assets/paper.css" folder...');

  rimraf.sync('dist', { disableGlob: true });

  if (fs.existsSync(paperDocsPath)) {
    fs.unlinkSync(paperDocsPath);
  }

  log('Compiling SCSS to CSS, entrypoint:', entrypoint);

  const compiledCSS = sass.renderSync({ file: entrypoint });

  log('Processing CSS: autoprefixer...');

  const autoprefixedCSS = await postcss([autoprefixer]).process(compiledCSS.css, { from: undefined });

  log('Processing CSS: cssnano...');

  const minifiedCSS = await postcss([cssnano]).process(autoprefixedCSS.css, { from: undefined });

  const paperPath = path.resolve(__dirname, '../dist/paper.css');
  const paperminpath = path.resolve(__dirname, '../dist/paper.min.css');

  log('Writing paper.css and paper.min.css files to dist/ and docs/ folders...');

  write(paperPath, autoprefixedCSS.css);
  write(paperminpath, minifiedCSS.css);
  write(paperDocsPath, autoprefixedCSS.css);

  log('Build done!');
}

build();
