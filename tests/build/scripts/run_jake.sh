# Runs Jake from node_modules directory, preventing it from needing to be installed globally
# Also ensures node modules have been installed
# There's no Quixote-specific configuration in this file.

[ ! -f node_modules/.bin/jake ] && echo "Installing npm modules:" && npm install
node_modules/.bin/jake $*