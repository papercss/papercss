// Copyright (c) 2012-2015 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

// Helper functions for running Karma
// There's no Quixote-specific configuration in this file.

(function() {
	"use strict";

	var path = require("path");
	var sh = require("./sh.js");
	var runner = require("karma/lib/runner");
	var server = require("karma/lib/server");

	var KARMA = "node node_modules/karma/bin/karma";

	exports.serve = function(configFile, success, fail) {
		var command = KARMA + " start " + configFile;
		sh.run(command, success, function () {
			fail("Could not start Karma server");
		});
	};

	exports.runTests = function(options, success, fail) {
		options.capture = options.capture || [];
		var config = {
			configFile: path.resolve(options.configFile),
			browsers: options.capture,
			singleRun: options.capture.length > 0
		};

		var runKarma = runner.run.bind(runner);
		if (config.singleRun) runKarma = server.start.bind(server);

		var stdout = new CapturedStdout();
		runKarma(config, function(exitCode) {
			stdout.restore();

			if (exitCode) return fail("Client tests failed (did you start the Karma server?)");
			var browserMissing = checkRequiredBrowsers(options.browsers, stdout);
			if (browserMissing && options.strict) return fail("Did not test all browsers");
			if (stdout.capturedOutput.indexOf("TOTAL: 0 SUCCESS") !== -1) return fail("No tests were run!");

			return success();
		});
	};

	function checkRequiredBrowsers(requiredBrowsers, stdout) {
		var browserMissing = false;
		requiredBrowsers.forEach(function(browser) {
			browserMissing = lookForBrowser(browser, stdout.capturedOutput) || browserMissing;
		});
		return browserMissing;
	}

	function lookForBrowser(browser, output) {
		var missing = output.indexOf(browser + ": Executed") === -1;
		if (missing) console.log("Warning: " + browser + " was not tested!");
		return missing;
	}

	function CapturedStdout() {
		var self = this;
		self.oldStdout = process.stdout.write;
		self.capturedOutput = "";

		process.stdout.write = function(data) {
			self.capturedOutput += data;
			self.oldStdout.apply(this, arguments);
		};
	}

	CapturedStdout.prototype.restore = function() {
		process.stdout.write = this.oldStdout;
	};

}());