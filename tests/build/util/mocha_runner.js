// Copyright (c) 2014-2015 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

// Helper function for running Mocha
// There's no Quixote-specific configuration in this file.

(function() {
	"use strict";

	var Mocha = require("mocha");
	var jake = require("jake");

	exports.runTests = function runTests(options, success, failure) {
		var mocha = new Mocha(options.options);
		var files = deglob(options.files);
		files.forEach(mocha.addFile.bind(mocha));

		//   This is a bit of a hack. The issue is this: during test execution, if an exception is thrown inside
		// of a callback (and keep in mind that assertions throw exceptions), there's no way for Mocha to catch
		// that exception.
		//   So Mocha registers an 'uncaughtException' handler on Node's process object. That way any unhandled
		// exception is passed to Mocha.
		//   The problem is that Jake ALSO listens for 'uncaughtException'. Its handler and Mocha's handler don't
		// get along. Somehow the Jake handler seems to terminate Mocha's test run... not sure why. We need to
		// disable Jake's handler while Mocha is running.
		//   This code disables ALL uncaughtException handlers and then restores them after Mocha is done. It's
		// very hacky and likely to cause problems in certain edge cases (for example, '.once' listeners aren't
		// restored properly), but it seems to be working for now.
		//   It might be possible to create a better solution by using Node's 'domain' module. Something to look
		// into if you're reading this. Another solution is to just spawn Mocha in a separate process, but I
		// didn't want the time penalty involved. Besides, this seems to be working okay.
		var savedListeners = disableExceptionListeners();

		var runner = mocha.run(function(failures) {
			restoreExceptionListeners(savedListeners);
			if (failures) return failure("Tests failed");
			else return success();
		});
	};

	function deglob(globs) {
		return new jake.FileList(globs).toArray();
	}

	function disableExceptionListeners() {
		var listeners = process.listeners("uncaughtException");
		process.removeAllListeners("uncaughtException");
		return listeners;
	}

	function restoreExceptionListeners(listeners) {
		listeners.forEach(process.addListener.bind(process, "uncaughtException"));
	}

}());
