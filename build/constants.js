const path = require('path');

module.exports = {
  ENTRYPOINT_PATH: path.resolve(__dirname, '../src/styles.scss'),
  PAPER_DIST_PATH: path.resolve(__dirname, '../dist/paper.css'),
  PAPER_DIST_MIN_PATH: path.resolve(__dirname, '../dist/paper.min.css'),
  PAPER_DOCS_PATH: path.resolve(__dirname, '../docs/static/assets/paper.css'),
};
