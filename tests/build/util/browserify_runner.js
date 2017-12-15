/* Copyright (c) 2014 Titanium I.T. LLC - See LICENSE.txt for license */

// Helper function for running Browserify
// There's no Quixote-specific configuration in this file.

"use strict";

var fs = require("fs");
var path = require("path");
var browserify = require("browserify");

exports.bundle = function(config, success, failure) {
	var b = browserify(config.options);

	b.add(path.resolve(config.entry));
	b.bundle(function(err, bundle) {
		if (err) return failure(err);
		fs.writeFileSync(config.outfile, bundle);
		return success();
	});
};