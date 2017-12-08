// Copyright (c) 2015 Titanium I.T. LLC. All rights reserved. For license, see "README" or "LICENSE" file.

// Automatically runs build when files change.
// There's no Quixote-specific configuration in this file.

(function() {
	"use strict";

	var nodemon = require("nodemon");
	var buildCommand = require("../config/build_command.js");
	var paths = require("../config/paths.js");

	console.log("*** Using nodemon to run " + buildCommand.get() + ". Type 'rs<enter>' to force restart.");
	nodemon({
		ext: "sh bat json js html css",
		ignore: paths.generatedDir,
		exec: buildCommand.get() + " " + process.argv.slice(2).join(" "),
		execMap: {
			sh: "/bin/sh",
			bat: "cmd.exe /c",
			cmd: "cmd.exe /c"
		}
	}).on("restart", function(files) {
		if (files) console.log("*** Restarting due to", files);
		else console.log("*** Restarting");
	});

}());
