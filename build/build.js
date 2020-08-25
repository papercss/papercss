const path = require('path');
const sass = require('sass');
const chalk = require('chalk');
const write = require('write');
const rimraf = require('rimraf');
const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

async function build() {
  const entrypoint = path.resolve(__dirname, '../src/styles.scss');

  console.log('📦', chalk.cyan('Starting PaperCSS build...'));
  console.log('📦', chalk.cyan('Cleaning dist/ folder...'));

  rimraf.sync('dist', { disableGlob: true });

  console.log('📦', chalk.cyan('Compiling SCSS to CSS, entrypoint:', entrypoint));

  const compiledCSS = sass.renderSync({ file: entrypoint });

  console.log('📦', chalk.cyan('Applying autoprefixer and cssnano...'));

  const autoprefixedCSS = await postcss([autoprefixer]).process(compiledCSS.css, { from: undefined });
  const minifiedCSS = await postcss([cssnano]).process(autoprefixedCSS.css, { from: undefined });

  const paperpath = path.resolve(__dirname, '../dist/paper.css');
  const paperminpath = path.resolve(__dirname, '../dist/paper.min.css');

  console.log('📦', chalk.cyan('Writing paper.css and paper.min.css files...'));

  write(paperpath, autoprefixedCSS.css);
  write(paperminpath, minifiedCSS.css);

  console.log('📦', chalk.cyan('Build done!'));
}

build();
