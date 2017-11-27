// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// Lists commonly-used directories. They're all relative to the project root.

(function() {
	"use strict";

	module.exports = {
		generatedDir: "generated",
		testDir: "generated/test",
		distDir: "generated/dist",
		clientDistDir: "generated/dist/client",

		buildDir: "build",
		clientDir: "src",
		clientEntryPoint: "src/toggle.js",
		clientDistBundle: "generated/dist/client/bundle.js"
	};

}());